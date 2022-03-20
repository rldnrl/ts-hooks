import { ReactNode } from 'react'
import { css } from '@emotion/react'

type AppLayoutProps = {
  children?: ReactNode | ReactNode[]
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div
      css={css`
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      {children}
    </div>
  )
}

export default AppLayout
