import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../header'

const onChange = jest.fn

describe('searchInput', () => {

  it('should render input element', () => {
    render(
      <Header
        filter={''}
        handleSearch={onChange}
      />
    )
    const inputSearch = screen.getByTestId('input-search')
    expect(inputSearch).toBeInTheDocument()
  })

  it('should be able to type into input', () => {
    render(
      <Header
        filter={''}
        handleSearch={onChange}
      />
    )

    const inputSearch = screen.getByTestId('input-search')
    fireEvent.click(inputSearch)
    fireEvent.change(inputSearch, { target: { value: "first name driver" }})
    // expect(inputSearch.value).toBe("first name driver")
  })

})
