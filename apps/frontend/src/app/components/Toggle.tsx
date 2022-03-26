import { useToggle } from '@ts-hook/hooks'

const Toggle = () => {
  const [value, onToggle] = useToggle(false)
  return (
    <div>
      <p>{`${value}`}</p>
      <button onClick={onToggle}>토글</button>
    </div>
  )
}

export default Toggle
