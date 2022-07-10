import { useState } from "react";
import { useValidation, Validations } from "./useValidation";

export const useInput = (initialValue: string, validations?: Validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setDirty(true);
  };

  return { value, isDirty, onChange, onBlur, ...valid };
};
