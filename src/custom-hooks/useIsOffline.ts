// hook that returns true whenever user goes offline
// const isOffline=useIsOffline()

import { useEffect, useState } from "react";

export function useIsOffline() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("keypress", () => {
      setIsOffline(() => {
        console.log(navigator.onLine);
        return !navigator.onLine;
      });
    });
  });
  return isOffline;
}
