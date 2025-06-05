// useOnClickOutside: Detects when a user clicks outside the given DOM node and runs a callback.
//  This hook doesn't return anything; it just listens to outside clicks.
// const ref = useRef(null);
// useOnClickOutside(ref, () => setIsOpen(false));

import { useCallback, useEffect } from "react";

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  action: () => void,
) {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (!ref.current.contains(e.target)) {
          action();
        }
      }
    },
    [action, ref],
  );
  useEffect(() => {
    window.addEventListener("click", (e) => handleClick(e));
    return () => {
      window.removeEventListener("click", (e) => handleClick(e));
    };
  }, [action, handleClick, ref]);
}
