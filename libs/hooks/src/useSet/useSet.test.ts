import { renderHook } from '@testing-library/react-hooks'
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
})
