import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'

const App = () => {
  //States
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  //Refs
  const blogFormRef = React.createRef()

  //Effects
  useEffect(() => {
    blogService.getAll().then(blogs => {
      blogs.sort((a, b) => a.likes < b.likes )
      setBlogs( blogs )
    }
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

  //Click/Submit handlers
  const createBlog = (newBlog) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(newBlog)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
      })
      .catch(error => console.log(error))
  }

  const addBlogLike = (id) => {
    // Nothing to prevent a user adding multiple likes. 
    // Could be achieved by having the user doc in DB store array of liked object ids
    // Like button then switched for liked button if already liked which perfroms reverse operation

    // Add like to blog locally
    setBlogs(blogs.map(blog => blog.id === id ? {likes: blog.likes++, ...blog} : blog))
    // Send request to increment blog likes and override local update with response
    blogService
      .addLike(id)
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id === returnedBlog.id ? returnedBlog : blog))
      })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
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

  const logOut = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  

  //Components
  const blogForm = () => (
      <Togglable buttonLabel='Add new blog' ref={blogFormRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>
  )

  const loginForm = () => (
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

  //App
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
          {blogs.map(blog => <Blog key={blog.id} blog={blog} addBlogLike={addBlogLike} />)}

          {blogForm()}
        </div>
      }
    </div>
  )
}

export default App