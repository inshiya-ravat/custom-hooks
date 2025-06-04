// useSessionStorage hook

import { useEffect, useState } from "react";

// exact same as useLocalStorage but this hook uses session storage instead of local storage
export function useSessionStorage(key: string, initialVal: string) {
  useEffect(() => {
    sessionStorage.setItem(key, initialVal);
  }, [initialVal, key]);
  const [value, setValue] = useState(initialVal);

  function setVal(newVal: string) {
    setValue(() => {
      sessionStorage.setItem(key, newVal);
      return newVal;
    });
  }

  function removeValue() {
    sessionStorage.removeItem(key);
  }

  return {
    value: value,
    setVal,
    removeValue,
  };
}
