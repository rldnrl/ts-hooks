import { useEffect, useRef } from 'react'
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect'

type UseInterval = (callback: () => void, delay: number | null) => void

const useInterval: UseInterval = (callback, delay) => {
  const savedCallback = useRef(callback)

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const interval = setInterval(() => savedCallback.current(), delay)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useInterval
