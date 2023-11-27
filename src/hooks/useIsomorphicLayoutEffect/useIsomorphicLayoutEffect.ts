import { useEffect, useLayoutEffect } from 'react'

/**
 * @description
 * SSR이면 `useEffect`, CSR이면 `useLayoutEffect`를 실행합니다.
 */

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export default useIsomorphicLayoutEffect
