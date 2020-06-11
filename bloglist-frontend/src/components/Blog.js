import React from 'react'
const Blog = ({ blog, addBlogLike, deleteBlog, username }) => {
  const addLike = () => {
    addBlogLike(blog.id)
  }
  const removeBlog = () => {
    deleteBlog(blog)
  }

  return(
  <div>
    <p>
      Title: {blog.title}, 
      Author: {blog.author}, 
      URL: {blog.url}, 
      Likes: {blog.likes}
      <button onClick={addLike}>Like</button>
      {blog.user && blog.user.username === username && <button onClick={removeBlog}>Remove</button>}
    </p>
  </div>
  )
}

export default Blog
