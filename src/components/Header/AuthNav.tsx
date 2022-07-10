import React, { useState } from 'react'
import styles from './style.module.scss'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { ItemInCart } from 'redux/cartSlice';
import { RootState } from 'redux/store';
import { removeUser } from 'redux/userReducer';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook';

import { KeyLocalStorage, PageRoutes } from 'constants/routeNames';
import { Button } from "components/Button/Button";

export const AuthNav = () => {
  let [cartOpen, setCartOpen] = useState(false);

  const { itemsInCart } = useAppSelector((state: RootState) => state.cart);
  const { user } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getCount = () => {
    let res = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
      const element: ItemInCart = itemsInCart[i];
      res += element.count;
    }

    return res;
  };

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate(PageRoutes.Home);
    localStorage.removeItem(KeyLocalStorage.User);
  };

  return (
    <>
      <nav>
        <NavLink className={styles.navLink} to={PageRoutes.Home}>
          Home
        </NavLink>
        <NavLink className={styles.navLink} to={PageRoutes.PeoplePage}>
          People Page
        </NavLink>
        <NavLink className={styles.navLink} to={PageRoutes.ToDos}>
          To Do List
        </NavLink>
        <NavLink
          className={styles.navLink}
          to={`${PageRoutes.PersonalCabinet}/${user?.id}`}
        >
          Personal Cabinet
        </NavLink>
      </nav>
      <div className={styles.cartButtonWrapper}>
        <Link to={PageRoutes.ShoppingCart} className={styles.shopButton}>
          <FaShoppingCart
            size={30}
            onClick={() => {
              setCartOpen((cartOpen = !cartOpen));
            }}
            className={[
              styles.shopcartbutton,
              cartOpen && styles.shopcartbuttonActive,
            ].join(" ")}
          />
        </Link>
        <div className={styles.roundNumber}>{getCount()}</div>
      </div>
      <div className={styles.logoutbtn}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </>
  );
};
