import { useCallback, useState } from 'react'

export type SetOrEntries<V> = Set<V> | V[]

export interface Actions<V> {
  add: (value: V) => void
  setAll: (entries: SetOrEntries<V>) => void
  remove: (value: V) => void
  reset: Set<V>['clear']
}

type Return<V> = [Omit<Set<V>, 'add' | 'clear' | 'delete'>, Actions<V>]

export default function useSet<V>(
  initialState: SetOrEntries<V> = new Set()
): Return<V> {
  const [set, setSet] = useState(new Set(initialState))

  const actions: Actions<V> = {
    add: useCallback((value) => {
      setSet((prevSet) => {
        const newSet = new Set(prevSet)
        newSet.add(value)
        return newSet
      })
    }, []),
    setAll: useCallback((entries) => {
      setSet(() => new Set(entries))
    }, []),
    remove: useCallback((key) => {
      setSet((prevSet) => {
        const newSet = new Set(prevSet)
        newSet.delete(key)
        return newSet
      })
    }, []),
    reset: useCallback(() => {
      setSet(() => new Set())
    }, []),
  }

  return [set, actions]
}
