// const { data, refetch, isLoading, error } = useSWR({
//     fn: () => axiosInstance.get("my-path"),
//     enabled: false,
//     // if enabled is true, then fetch the data!
//   });

import { AxiosError } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type PropsType<F> = {
  fn: (value?: string) => Promise<F>; //generic
  enabled: boolean;
};
export function useFetch<T>({ fn, enabled }: PropsType<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | undefined>(); // geenric error type
  const [data, setData] = useState<T>(); //generic
  const fnRef = useRef(fn);
  const memoizedRefetch = useCallback(
    async (value?: string) => {
      if (enabled) {
        try {
          setIsLoading(true);
          setError(undefined);
          const response = await fnRef.current(value); //single await, install axios
          if (response instanceof AxiosError) {
            setError(response);
          }
          setData(response);
          setIsLoading(false);
        } catch (err) {
          if (err instanceof AxiosError) {
            setError(err);
          }
        }
      }
    },
    [enabled],
  );

  useEffect(() => {
    memoizedRefetch();
  }, [memoizedRefetch]);
  return {
    data,
    memoizedRefetch,
    isLoading,
    error,
  };
}
