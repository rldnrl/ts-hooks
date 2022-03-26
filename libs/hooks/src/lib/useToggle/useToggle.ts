import { useCallback, useState } from 'react'

type UseToggle = [boolean, () => void]

const useToggle = (initialValue?: boolean): UseToggle => {
  const [value, setValue] = useState(!!initialValue)

  const onToggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, onToggle]
}

export default useToggle
