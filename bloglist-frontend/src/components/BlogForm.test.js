import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

describe('<BlogForm />', () => {
  test('updates parent state and calls submit', () => {
    const createBlog = jest.fn()

    const component = render(<BlogForm createBlog={createBlog} />)

    const author = component.container.querySelector('#author')
    const form = component.container.querySelector('form')

    fireEvent.change(author, {
      target: { value: 'testing' }
    })
    fireEvent.submit(form)


    expect(createBlog.mock.calls).toHaveLength(1)
    //component.debug()
    //expect(createBlog.mock.calls[0][0].content).toBe('testing')
  })
})