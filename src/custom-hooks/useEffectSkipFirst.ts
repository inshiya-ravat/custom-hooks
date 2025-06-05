import { useEffect, useRef } from "react";

export function useEffectSkipFirst(
  callback: () => void,
  dependency: Array<unknown>,
) {
  const isFirstRender = useRef(true);
  const callbackRef = useRef(callback);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      callbackRef.current();
    }
  }, [callback, dependency]);
}
