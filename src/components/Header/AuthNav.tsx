import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ItemInCart } from 'redux/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook';
import { RootState } from 'redux/store';
import { removeUser } from 'redux/userReducer';
import styles from './style.module.scss'
export const AuthNav = () => {
    let [cartOpen, setCartOpen] = useState(false);
    
    const {itemsInCart} = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const getCount = () => {
      let res = 0
      for (let i = 0; i < itemsInCart.length; i++) {
        const element: ItemInCart = itemsInCart[i];
        res += element.count
      }

      return res
    }
    


    const handleLogOut = () =>{
      dispatch(removeUser());
      navigate("/")
      localStorage.removeItem('user');
    }
  
    return (
    <>
    <nav>
        <NavLink className={styles.navLink} to={"/"}>Home</NavLink>
        <NavLink className={styles.navLink} to={"/people-page"}>People Page</NavLink>
        <NavLink className={styles.navLink} to={"/todos"}>To Do List</NavLink>
    </nav>
    <div className={styles.cartButtonWrapper}>
        <Link to='/shopping-cart' className={styles.shopButton}><FaShoppingCart size={30} onClick={() =>{ setCartOpen(cartOpen = !cartOpen)}} className={[styles.shopcartbutton, cartOpen && styles.shopcartbuttonActive].join(' ')}/></Link> 
        <div className={styles.roundNumber}>{getCount()}</div>
    </div>
    <div className={styles.logoutbtn}>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
      </>
  )
}
