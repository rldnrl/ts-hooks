import { css } from '@emotion/react'
import { ReactNode } from 'react'

type ListProps = {
  children?: ReactNode | ReactNode[]
}

const List = ({ children }: ListProps) => <ul>{children}</ul>

type ListRowProps = {
  children?: ReactNode | ReactNode[]
}

List.Row = ({ children }: ListRowProps) => (
  <li
    css={css`
      margin: 1rem;
      padding: 1.5rem;
      text-align: left;
      color: inherit;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      max-width: 420px;
    `}
  >
    {children}
  </li>
)

export default List
