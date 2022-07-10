import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { MdPhotoCamera } from "react-icons/md";

import { Button } from "components/Button/Button";
import { FileUpload } from "./FileUpload";
import { useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";

import { NewApi } from "Api/new api/new-api";
import { BoxWrapper } from "./components/BoxWrapper/BoxWrapper";
import { EmailForm } from "./components/EmailForm/EmailForm";
import { PasswordForm } from "./components/PasswordForm/PasswordForm";

export const PersonalCabinet = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [picture, setPicture] = useState(user?.photoUrl);
  const [whatForm, setWhatForm] = useState("password");

  const handleButtonChange = () => {
    if (whatForm == "password") {
      setWhatForm("email");
    } else {
      setWhatForm("password");
    }
  };

  const onFileChange = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);
    const data = await NewApi.updateAvatar(formData);
    setPicture(data.url);
    console.log(file);
  };

  return (
    <>
      <Button onClick={handleButtonChange}>
        {whatForm === "password" ? "Change password" : "Change email"}
      </Button>

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

      <BoxWrapper>
        {whatForm === "email" ? <EmailForm /> : <PasswordForm />}
      </BoxWrapper>
    </>
  );
};
