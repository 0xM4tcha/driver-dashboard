import {render, screen, fireEvent} from '@testing-library/react'
import Navbar from '../navbar'

const onClick = jest.fn();

describe('Navbar', () => {
  
  it('should render Navbar', () => {
    render(<Navbar />)
  })

  it('should be able to click menu button', () => {
    render(<Navbar handleClickMenu={onClick} />)
    const menuButton = screen.getByTestId('menu-button')
    fireEvent.click(menuButton)
  })
})
 