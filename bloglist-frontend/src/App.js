import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

 
  
  const blogForm = () => {
    const createBlog = (newBlog) => {
      blogService
        .create(newBlog)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
        })
        .catch(error => console.log(error))
    }
    return (
      <Togglable buttonLabel='Add new blog'>
        <BlogForm createBlog={createBlog} />
      </Togglable>
    )
  }

  const loginForm = () => {
    const handleLogin = async (event) => {
      event.preventDefault()
      console.log('logging in with', username, password)
      try {
        const user = await loginService.login({ username, password })
  
        // Save token to local storage
        window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
  
        setUser(user)
        setUsername('')
        setPassword('')
      }
      catch (exception) {
        setErrorMessage('Wrong credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }

    return (
      <div>
        <Togglable buttonLabel='login'>
          <LoginForm 
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      </div>
    )
  }

  const logOut = () => {
    setUser(null)
    console.log('logging out', username, password)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  return (
    <div>
    <h1>Blog App</h1>
      <div>{errorMessage}</div>
      {user === null && loginForm()}
      {user !== null &&
        <div>
          <h2>Account</h2>
          <p>{user.name} logged in <button onClick={logOut}>Logout</button></p>

          <h2>Blogs</h2>
          {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}

          {blogForm()}
        </div>
      }
    </div>
  )
}

export default App