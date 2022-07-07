import { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "pages/Login/Login";
import Register from "pages/Registration/Register";
import PersonInfo from "pages/PersonInfo/PersonInfo";
import ToDo from "pages/ToDo/ToDo";
import ToDoList from "pages/ToDoList/ToDoList";
import PeoplePage from "pages/People-Page/PeoplePage";
import Home from "pages/Home/Home";
import ShoppingCart from "pages/Shopping-Cart/ShoppingCart";
import { PersonalCabinet } from "pages/PersonalCabinet/PersonalCabinet";

import { useAppDispatch, useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";
import { setUser } from "redux/userReducer";

import { NewApi } from "Api/new api/new-api";

import { PageRoutes } from "constants/routeNames";

import Header from "components/Header/Header";

function App() {
  const { isAuth } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const getUser = async () => {
    const user = await NewApi.getUserSmb();
    dispatch(setUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getUser();
    }
  }, []);

  const authRoutes = [
    <Route path={PageRoutes.PeoplePage} element={<PeoplePage />} />,
    <Route path={PageRoutes.ShoppingCart} element={<ShoppingCart />} />,
    <Route path={PageRoutes.Person} element={<PersonInfo />} />,
    <Route path={PageRoutes.ToDo} element={<ToDo />} />,
    <Route path={PageRoutes.ToDos} element={<ToDoList />} />,
    <Route
      path={`${PageRoutes.PersonalCabinet}/:userId`}
      element={<PersonalCabinet />}
    />,
  ];

  const anonRoutes = [
    <Route path={PageRoutes.Register} element={<Register />} />,
    <Route path={PageRoutes.Login} element={<Login />} />,
  ];

  return (
    <Router>
      <Header />
      <main className="App">
        <Routes>
          <Route path={PageRoutes.Home} element={<Home />} />,
          {!isAuth ? anonRoutes : authRoutes}
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
