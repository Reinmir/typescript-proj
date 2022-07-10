import React from "react";
import styles from "./style.module.scss";

import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";

import { useInput } from "redux/hooks/useInput";
import { NewApi } from "Api/new api/new-api";

export const PasswordForm = () => {
  const oldPasswd = useInput("", { isEmpty: true, minLength: 5 });
  const newPasswd = useInput("", { isEmpty: true, minLength: 5 });

  const submitPasswordChange = async (
    oldPassword: string,
    newPassword: string
  ) => {
    const data = await NewApi.updatePassword(oldPassword, newPassword);
    console.log(data);
  };
  return (
    <>
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
    </>
  );
};
