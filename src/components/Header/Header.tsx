import React, {useState} from "react";
import styles from './style.module.scss'
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa"
import { useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";
import { ItemInCart } from "redux/cartSlice";
import { AuthNav } from "./AuthNav";
import { AnonNav } from "./AnonNav";

function Header() {
  const {isAuth} = useAppSelector((state: RootState) => state.auth);
   
    return(
      <header className={styles.header} >
        {!isAuth ? <AnonNav/> : <AuthNav/>}
      </header>
    )
}

export default Header