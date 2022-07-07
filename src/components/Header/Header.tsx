import React from "react";
import styles from './style.module.scss'

import { useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";

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