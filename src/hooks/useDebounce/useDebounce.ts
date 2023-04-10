import {useEffect, useState} from "react";

export default function useDebounce<T>(value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue
}
