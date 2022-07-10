import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { MdPhotoCamera } from "react-icons/md";

import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { FileUpload } from "./FileUpload";
import { useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";

import { NewApi } from "Api/new api/new-api";
import { useInput } from "redux/hooks/useInput";

export const PersonalCabinet = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [picture, setPicture] = useState(user?.photoUrl);

  const onFileChange = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    const data = await NewApi.updateAvatar(formData);
    setPicture(data.url);
    console.log(file);
  };

  const submitEmailChange = async (newEmail: string) => {
    const data = await NewApi.updateEmail(newEmail);
    console.log(data);
  };

  const submitPasswordChange = async (
    oldPassword: string,
    newPassword: string
  ) => {
    const data = await NewApi.updatePassword(oldPassword, newPassword);
    console.log(data);
  };

  const email = useInput("", { isEmpty: true, isEmail: true, minLength: 3 });
  const oldPasswd = useInput("", { isEmpty: true, minLength: 5 });
  const newPasswd = useInput("", { isEmpty: true, minLength: 5 });

  return (
    <>
      <div className={styles.changeBox}>
        <div className={styles.changeEmail}>
          <p>Type your new email</p>
          <Input
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            type="email"
          />
          {email.isDirty && email.isEmpty && (
            <div className={styles.divError}>Cannot be empty</div>
          )}
          {email.isDirty && email.emailError && (
            <div className={styles.divError}>Email isn't correct</div>
          )}
          <Button onClick={() => submitEmailChange(email.value)}>Accept</Button>
        </div>
      </div>

      <div className={styles.changeBox}>
        <div className={styles.changePasswd}></div>
        <p>Enter your current password</p>
        <Input
          onBlur={(e) => oldPasswd.onBlur(e)}
          onChange={(e) => oldPasswd.onChange(e)}
          value={oldPasswd.value}
          type="password"
        />
        {oldPasswd.isDirty && oldPasswd.isEmpty && (
          <div className={styles.divError}>Cannot be empty</div>
        )}
        <p>Type your new password</p>
        <Input
          value={newPasswd.value}
          onBlur={(e) => newPasswd.onBlur(e)}
          onChange={(e) => newPasswd.onChange(e)}
          type="password"
        />
        {newPasswd.isDirty && newPasswd.isEmpty && (
          <div className={styles.divError}>Cannot be empty</div>
        )}
        <Button
          onClick={() => submitPasswordChange(oldPasswd.value, newPasswd.value)}
        >
          Accept
        </Button>
      </div>

      <FileUpload setFile={onFileChange} accept={"image/*"}>
        {picture ? (
          <p className={styles.userPhoto}>
            <img src={picture} className={styles.userPhotoImg} />
          </p>
        ) : (
          <MdPhotoCamera
            size={125}
            className={styles.uploadBtn}
          ></MdPhotoCamera>
        )}
      </FileUpload>
    </>
  );
};
