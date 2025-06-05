// hooks that returns true or false if given key is pressed.
// it can be any key from keybord.
// const isEscPressed = useKeyPress('Escape');

import { useCallback, useEffect, useState } from "react";

export function useKeyPress(key: string) {
  const [isKey, setIsKey] = useState(false);

  const checkKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key) {
        setIsKey(true);
      } else {
        setIsKey(false);
      }
    },
    [key],
  );

  useEffect(() => {
    window.addEventListener("keypress", checkKey);
    return () => {
      window.removeEventListener("keypress", checkKey);
    };
  }, [checkKey]);

  return isKey;
}
