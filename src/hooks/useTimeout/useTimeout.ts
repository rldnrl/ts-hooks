import { useEffect, useRef } from 'react'
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect'

type UseTimeout = (callback: () => void, delay: number | null) => void

const useTimeout: UseTimeout = (callback, delay) => {
  const savedCallback = useRef(callback)

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const timer = setTimeout(() => savedCallback.current(), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])
}

export default useTimeout
