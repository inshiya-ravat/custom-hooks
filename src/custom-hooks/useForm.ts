// 2) useForm: This hook manages form state and handles changes and submission logic.
// const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit);

import { useState, type ChangeEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  onSubmit: () => void,
) {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange(e: ChangeEvent<HTMLInputElement>, key: keyof T) {
    setValues((prevValues) => {
      const newValues = prevValues;
      newValues[key] = e.target.value as T[keyof T];
      return newValues;
    });
  }

  function handleSubmit() {
    onSubmit();
  }

  function resetForm() {
    setValues(initialValues);
  }
  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
