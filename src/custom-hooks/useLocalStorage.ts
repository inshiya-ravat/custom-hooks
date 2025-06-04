// const [value, setValue, removeValue] = useLocalStorage('test-key', 0)
/*
arguments
1st key
2nd initialValue
*/
/*
what is returns
 value => actual value in local storage
 setValue => function to setValue in local storage
 removeValue => function to remove value from local storage 
*/

import { useState } from "react";

export function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(initialValue);
  localStorage.setItem(key, value);
  function set(val: string) {
    setValue(() => {
      localStorage.setItem(key, val);
      return val;
    });
  }
  function removeValue() {
    localStorage.removeItem(key);
  }
  return {
    value,
    set,
    removeValue,
  };
}
