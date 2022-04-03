import { Dispatch, SetStateAction, useState } from 'react'

interface UseBoolean {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

const useBoolean = (defaultValue = false): UseBoolean => {
  const [value, setValue] = useState(false)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue((prevValue) => !prevValue)

  return { value, setValue, setTrue, setFalse, toggle }
}

export default useBoolean
