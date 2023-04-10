import { useCallback, useState } from 'react'

export type MapOrEntries<K, V> = Map<K, V> | [K, V][]

export interface Actions<K, V> {
  set: (key: K, value: V) => void
  setAll: (entries: MapOrEntries<K, V>) => void
  remove: (key: K) => void
  reset: Map<K, V>['clear']
}

type Return<K, V> = [Omit<Map<K, V>, 'set' | 'clear' | 'delete'>, Actions<K, V>]

export default function useMap<K, V>(
  initialState: MapOrEntries<K, V> = new Map()
): Return<K, V> {
  const [map, setMap] = useState(new Map(initialState))

  const actions: Actions<K, V> = {
    set: useCallback((key, value) => {
      setMap((prevMap) => {
        const newMap = new Map(prevMap)
        newMap.set(key, value)
        return newMap
      })
    }, []),
    setAll: useCallback((entries) => {
      setMap(() => new Map(entries))
    }, []),
    remove: useCallback((key) => {
      setMap((prevMap) => {
        const newMap = new Map(prevMap)
        newMap.delete(key)
        return newMap
      })
    }, []),
    reset: useCallback(() => {
      setMap(() => new Map())
    }, []),
  }

  return [map, actions]
}
