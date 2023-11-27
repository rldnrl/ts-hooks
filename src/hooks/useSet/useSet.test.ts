import { act, renderHook } from '@testing-library/react'
import useSet from './useSet'

describe('useSet()', () => {
  it('should be ok when initiated with set', () => {
    const initialSet = new Set([1, 2, 3])
    const { result } = renderHook(() => useSet(initialSet))

    expect(result.current[0].size).toBe(3)
  })

  it('should be ok when initiated with array', () => {
    const initialArray = [1, 2, 3]
    const { result } = renderHook(() => useSet(initialArray))

    expect(result.current[0])
  })

  it('should be ok when initiated without nothing', () => {
    const { result } = renderHook(() => useSet())

    expect(result.current[0].size).toBe(0)
  })

  it('should add new value', () => {
    const { result } = renderHook(() => useSet<number>())
    const [, actions] = result.current

    expect(result.current[0].size).toBe(0)

    act(() => actions.add(1))

    expect(result.current[0].size).toBe(1)
  })

  it('should setAll replace all existing values', () => {
    const initialSet = new Set([1, 2])
    const { result } = renderHook(() => useSet(initialSet))
    const [, actions] = result.current

    expect(result.current[0].has(1)).toBe(true)
    expect(result.current[0].has(2)).toBe(true)

    act(() => actions.setAll([5]))

    expect(result.current[0].has(1)).toBe(false)
    expect(result.current[0].has(2)).toBe(false)
    expect(result.current[0].has(5)).toBe(true)
    expect(result.current[0].size).toBe(1)
  })

  it('should remove existing value', () => {
    const initialSet = new Set([1])
    const { result } = renderHook(() => useSet(initialSet))
    const [set, actions] = result.current

    act(() => {
      if (set.has(1)) {
        actions.remove(1)
      }
    })

    expect(result.current[0].size).toBe(0)
  })

  it('should reset the set state', () => {
    const initialSet = new Set([1, 2, 3, 4])
    const { result } = renderHook(() => useSet(initialSet))
    const [, actions] = result.current

    act(() => actions.reset())

    expect(result.current[0].has(1)).toBe(false)
    expect(result.current[0].size).toBe(0)
  })
})
