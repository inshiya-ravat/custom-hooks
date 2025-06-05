// hook that provide reset function, using which we can reset state to initial state.
// const [state,setState,reset]=useResetState(initialValue)

import { useState } from "react";

export function useResetState<T>(initialValue: T) {
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
