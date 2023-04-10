import { useCallback, useState } from 'react'

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const onToggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return { value, onToggle }
}

export default useToggle
