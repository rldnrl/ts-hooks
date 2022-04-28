import { useRef } from 'react'

import { useEventListener } from '@ts-hook/hooks'

export default function EventListener() {
  // Define button ref
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onScroll = (event: Event) => {
    console.log('window scrolled!', event)
  }

  const onClick = (event: Event) => {
    console.log('button clicked!', event)
  }

  useEventListener('scroll', onScroll)

  useEventListener('click', onClick, buttonRef)

  return (
    <div style={{ minHeight: '200vh' }}>
      <button ref={buttonRef}>Click me</button>
    </div>
  )
}
