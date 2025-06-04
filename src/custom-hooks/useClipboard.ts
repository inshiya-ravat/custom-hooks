// useClipboard: This hook allows you to copy text to the clipboard and track whether the text was successfully copied.
// const { copy, isCopied } = useClipboard();

import { useState } from "react";

export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  function copy(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }
  return {
    copy,
    isCopied,
  };
}
