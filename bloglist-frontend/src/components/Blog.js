import React from 'react'
const Blog = ({ blog, addBlogLike }) => {
  const addLike = () => {
    addBlogLike(blog.id)
  }
  return(
  <div>
    <p>Title: {blog.title}, 
    Author: {blog.author}, 
    URL: {blog.url}, 
    Likes: {blog.likes}</p>
    <button onClick={addLike}>Like</button>
  </div>
  )
}

export default Blog
