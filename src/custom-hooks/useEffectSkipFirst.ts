import { useEffect, useRef } from "react";

export function useEffectSkipFirst(
  callback: () => void,
  dependency: Array<unknown>,
) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      callback();
    }
  }, [callback, isFirstRender, dependency]);
}
