import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  title: 'Has a title',
  author: 'Has a author',
  url: 'Has a URL',
  likes: 0
}

test('renders content', () => {
  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Has a title',
    'Has a author',
    'Has a URL'
  )
})

test('add likes button adds 1 like pre click', () => {
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} addBlogLike={mockHandler} />
  )

  const button = component.getByText('Like')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})