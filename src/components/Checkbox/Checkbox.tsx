import React from "react";

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return <input type="checkbox" checked={checked} />;
};
