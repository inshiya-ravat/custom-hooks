import { useState } from "react";
// const [value, toggle, setValue] = useToggle()
// value will be boolean
// toggle is a function that can toggle the value
// setValue is a function that will set value given by you

export function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);
  const toggle = () => setValue((p) => !p);

  return {
    value,
    toggle,
    setValue,
  };
}
