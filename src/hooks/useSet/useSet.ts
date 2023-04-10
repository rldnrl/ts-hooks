import { useCallback, useState } from 'react'

export type SetOrEntries<T> = Set<T> | T[]

export interface Actions<T> {
  add: (value: T) => void
  setAll: (entries: SetOrEntries<T>) => void
  remove: (value: T) => void
  reset: Set<T>['clear']
}

type Return<T> = [Omit<Set<T>, 'add' | 'clear' | 'delete'>, Actions<T>]

export default function useSet<T>(
  initialState: SetOrEntries<T> = new Set()
): Return<T> {
  const [set, setSet] = useState(new Set(initialState))

  const actions: Actions<T> = {
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
