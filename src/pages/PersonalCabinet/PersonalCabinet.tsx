import React, { useState } from "react";
import styles from "./style.module.scss";

import { MdPhotoCamera } from "react-icons/md";

import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";

export const PersonalCabinet = () => {
  const [isNameValid, setIsNameValid] = useState(true);

  let handleOnChange = (email: string) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){

    } else{

    }
  };

  return (
    <>
      <div className={styles.changeBox}>
        <div className={styles.changeEmail}>
          <p>Type your new email</p>
          <Input type="email" onChange={() =>{}} />
          <Button>Accept</Button>
        </div>
      </div>

      <div className={styles.changeBox}>
        <div className={styles.changePasswd}></div>
        <p>Enter your current password</p>
        <Input type="password" />
        <p>Type your new password</p>
        <Input type="password" />
        <Button>Accept</Button>
      </div>
      <div className={styles.addPhoto}>
        <MdPhotoCamera size={125}></MdPhotoCamera>
      </div>
    </>
  );
};
