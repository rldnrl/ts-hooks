import Home from '@/pages/index'
import { render } from '@testing-library/react'

describe('Home Test', () => {
  it('should render Home Page', () => {
    render(<Home />)
  })
})
