import { DependencyList, useEffect, useReducer, useRef } from 'react'

interface State<T> {
  isLoading?: boolean
  data?: T
  error?: Error
}

type Cache<T> = { [queryKey: string]: T }

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

type AsyncCallback<T> = () => Promise<T>

type UseFetch<T> = State<T>

function useFetch<T = unknown>(
  queryKey: string,
  callback?: AsyncCallback<T>,
  deps: DependencyList = []
): UseFetch<T> {
  const cache = useRef<Cache<T>>({})

  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    isLoading: true,
    error: undefined,
    data: undefined,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true }
      case 'fetched':
        return { ...initialState, data: action.payload, isLoading: false }
      case 'error':
        return { ...initialState, error: action.payload, isLoading: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!callback) return

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      if (cache.current[queryKey]) {
        dispatch({ type: 'fetched', payload: cache.current[queryKey] })
        return
      }

      try {
        const data = await callback()

        cache.current[queryKey] = data
        if (cancelRequest.current) return

        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        if (cancelRequest.current) return
        dispatch({ type: 'error', payload: error as Error })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}

export default useFetch
