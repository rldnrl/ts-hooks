import { useCounter } from '@ts-hook/hooks'

const Counter = () => {
  const { count, increase, decrease, reset } = useCounter(10)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increase()}>+1</button>
      <button onClick={() => decrease()}>-1</button>
      <button onClick={() => reset()}>리셋</button>
    </div>
  )
}

export default Counter
