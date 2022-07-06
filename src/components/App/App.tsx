import {useEffect, useState} from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Login from 'pages/Login/Login'
import Register from 'pages/Registration/Register'
import PersonInfo from 'pages/PersonInfo/PersonInfo'
import ToDo from 'pages/ToDo/ToDo'
import ToDoList from 'pages/ToDoList/ToDoList'
import PeoplePage from 'pages/People-Page/PeoplePage'
import Home from 'pages/Home/Home'
import Header from 'components/Header/Header'
import ShoppingCart from 'pages/Shopping-Cart/ShoppingCart'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook'
import { RootState } from 'redux/store'
import { NewApi } from 'Api/new api/new-api'
import { setUser } from 'redux/userReducer'

function App() {


    const {isAuth} = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const getUser = async () => {
      const user = await NewApi.getUserSmb();
      dispatch(setUser(user));
    }
    

    useEffect(() =>{
      if(localStorage.getItem('user')){
        getUser();
      }
    }, [])



  const authRoutes = [
    <Route path="/people-page" element={<PeoplePage/>}/>,
    <Route path="/shopping-cart" element={<ShoppingCart/>}/>,
    <Route path="/people-page/person" element={<PersonInfo/>}/>,
    <Route path="/todos/:todoId" element={<ToDo/>}/>,
    <Route path="/todos" element={<ToDoList/>}/>,
  ]
  
  const anonRoutes = [

    <Route path="/register" element={<Register/>}/>,
    <Route path="/login" element={<Login/>}/>,
  ]

  return (
   <Router>
    <Header/>
    <main className='App'>   
      <Routes>
        <Route path="/" element={<Home/>}/>,
        {!isAuth ? anonRoutes : authRoutes}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </main>
    </Router>
  )
}

export default App