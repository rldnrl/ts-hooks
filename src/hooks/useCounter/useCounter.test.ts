import { renderHook, act } from '@testing-library/react'
import useCounter from './useCounter'

describe('useCounter Test', () => {
  it('should increase count', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => {
      result.current.increase()
      result.current.increase()
      result.current.increase()
      result.current.increase()
      result.current.increase()
    })

    expect(result.current.count).toBe(5)
  })
  it('should decrease count', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => {
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
    })

    expect(result.current.count).toBe(-5)
  })
  it('should reset count', () => {
    const { result } = renderHook(() => useCounter(0))

    act(() => {
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()

      result.current.reset()
    })

    expect(result.current.count).toBe(0)
  })
  it('should increase and decrease count', () => {
    const { result } = renderHook(() => useCounter(11))

    act(() => {
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()
      result.current.decrease()

      result.current.increase()
    })

    expect(result.current.count).toBe(7)
  })
})
