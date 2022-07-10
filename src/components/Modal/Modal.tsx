import React, { FC } from "react";

import "./style.scss";

export interface ModalProps extends React.PropsWithChildren {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? "modal_content active" : "modal_content"}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};
