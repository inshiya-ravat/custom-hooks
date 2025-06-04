// hook that provide reset function, using which we can reset state to initial state.
// const [state,setState,reset]=useResetState(initialValue)

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useResetState(initialValue: any) {
  const [state, setState] = useState(initialValue);

  function reset() {
    setState(initialValue);
  }

  return {
    state,
    setState,
    reset,
  };
}
