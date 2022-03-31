import {render, screen, fireEvent} from '@testing-library/react'
import Footer from '../footer'

const onClick = jest.fn();

describe("Footer", () => {
  
  it('should render button element', () => {
    render(<Footer />)
    const buttonPrev = screen.getByTestId('button-prev')
    const buttonNext = screen.getByTestId('button-next')
    expect(buttonPrev).toBeInTheDocument()
    expect(buttonNext).toBeInTheDocument()
  })

  it('should be able to click button', async () => {
    render(<Footer
      onPrev={onClick}
      onNext={onClick}
      isPrevDisabled={false}
      isNextDisabled={false}
    />)
    
    const buttonPrev = screen.getByTestId('button-prev')
    fireEvent.click(buttonPrev)
    expect(onClick).toBeCalled()

    const buttonNext = screen.getByTestId('button-next')
    fireEvent.click(buttonNext)
    expect(onClick).toBeCalled()
  })
})
