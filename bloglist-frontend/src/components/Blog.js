import React from 'react'
const Blog = ({ blog }) => (
  <div>
    <p>Title: {blog.title}, 
    Author: {blog.author}, 
    URL: {blog.url}, 
    Likes: {blog.likes}</p>
  </div>
)

export default Blog
