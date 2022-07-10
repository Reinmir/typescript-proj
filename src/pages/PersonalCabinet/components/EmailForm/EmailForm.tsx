import { NewApi } from "Api/new api/new-api";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import React from "react";
import { useInput } from "redux/hooks/useInput";
import styles from "./style.module.scss";

export const EmailForm = () => {
  const email = useInput("", { isEmpty: true, isEmail: true, minLength: 3 });

  const submitEmailChange = async (newEmail: string) => {
    const data = await NewApi.updateEmail(newEmail);
    console.log(data);
  };
  return (
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
  );
};
