import { useCounter, useUpdateEffect } from '@ts-hook/hooks'

const UpdateEffect = () => {
  const { count, increase } = useCounter()
  useUpdateEffect(() => alert(count), [count])

  return (
    <div>
      {count}
      <button onClick={() => increase()}>증가</button>
    </div>
  )
}

export default UpdateEffect
