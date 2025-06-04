// useUndoRedo
// const [state,setState,undo,redo]=useUndoRedo("aa")
// hook that supports undo and redo !

import { useRef, useState } from "react";

export function useUndoRedo<T>(initalValue: T) {
  const [state, setState] = useState<T>(initalValue);
  const undoStack = useRef<T[]>([]);
  const redoStack = useRef<T[]>([]);

  function set(newVal: T) {
    undoStack.current.push(state);
    redoStack.current = [];
    setState(newVal);
  }

  function undo() {
    const prevState = undoStack.current.pop();
    if (prevState) {
      redoStack.current.push(state);
      setState(prevState);
    }
  }

  function redo() {
    const nextState = redoStack.current.pop();
    if (nextState) {
      undoStack.current.push(state);
      setState(nextState);
    }
  }
  return {
    state,
    set,
    undo,
    redo,
  };
}
