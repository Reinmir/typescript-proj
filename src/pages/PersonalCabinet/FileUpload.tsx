import React, { useRef } from "react";
import styles from "./style.module.scss";
interface FileUploadProps extends React.PropsWithChildren {
  setFile: Function;
  accept: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  children,
  accept,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  };
  return (
    <div
      onClick={() => ref.current?.click()}
      className={styles.userPhotoWrapper}
    >
      <input
        type="file"
        style={{ display: "none" }}
        accept={accept}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
