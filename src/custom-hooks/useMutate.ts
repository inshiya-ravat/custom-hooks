import { AxiosError } from "axios";
import { useState } from "react";

interface Mutate<T, K> {
  fn: (reqBody: K) => Promise<T>;
}
export function useMutation<T, K>({ fn }: Mutate<T, K>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  async function mutate(reqBody: K, onSuccess: (response: T) => void) {
    try {
      setIsLoading(true);
      setError(undefined);
      const response = await fn(reqBody);
      if (response instanceof AxiosError) {
        setError(response);
      }
      onSuccess(response);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err);
      }
    }
  }
  return {
    isLoading,
    error,
    mutate,
  };
}
