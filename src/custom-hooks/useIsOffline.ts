// hook that returns true whenever user goes offline
// const isOffline=useIsOffline()

import { useEffect, useState } from "react";

export function useIsOffline() {
  const [isOffline, setIsOffline] = useState(false);

  function isUserOnline() {
    setIsOffline(false);
  }
  useEffect(() => {
    window.addEventListener("online", isUserOnline);
    return () => {
      window.removeEventListener("online", isUserOnline);
    };
  }, []);
  return isOffline;
}
