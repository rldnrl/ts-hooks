import { useEffect, useState } from 'react'

const useTimer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  const formatTime = (time: number) => String(time).padStart(2, '0')

  const hours = formatTime(Math.floor(time % 3600))
  const minutes = formatTime(Math.floor((time % 3600) / 60))
  const seconds = formatTime(time % 60)

  return { hours, minutes, seconds }
}

export default useTimer
