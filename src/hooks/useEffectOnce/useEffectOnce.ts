import { EffectCallback, useEffect } from 'react'

/**
 * @description
 * Mount 될 때 최초 한 번만 실행됩니다.
 */
const useEffectOnce = (effect: EffectCallback) => useEffect(effect, [])

export default useEffectOnce
