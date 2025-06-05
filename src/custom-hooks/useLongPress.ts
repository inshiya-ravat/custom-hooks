import { useRef } from "react";

export function useLongPress(func: () => void) {
  const timeoutId = useRef<number>(undefined);

  function handleMouseDown() {
    timeoutId.current = setTimeout(() => {
      timeoutId.current = undefined;
      func();
    }, 1500);
  }

  function handleMouseUp() {
    clearTimeout(timeoutId.current);
  }
  return {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };
}
