import { renderHook, act } from '@testing-library/react'
import useToggle from './useToggle'

describe('useToggle Test', () => {
  it('should be toggle with initial value', () => {
    const { result } = renderHook(() => useToggle(false))

    act(() => {
      result.current.onToggle()
    })

    expect(result.current.value).toBe(true)
  })

  it('should be toggle with empty value', () => {
    const { result } = renderHook(() => useToggle())

    act(() => {
      result.current.onToggle()
    })

    expect(result.current.value).toBe(true)
  })
})
