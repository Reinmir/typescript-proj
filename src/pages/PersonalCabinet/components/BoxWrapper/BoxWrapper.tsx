import React from "react";
import styles from "./style.module.scss";

interface BoxWrapperProps extends React.PropsWithChildren{
    
}


export const BoxWrapper: React.FC<BoxWrapperProps> = ({children}) => {
  return <div className={styles.changeBox}>{children}</div>;
};
