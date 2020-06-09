import React, {useState} from 'react'

const BlogForm = ({createBlog}) => {
    const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })

    const onTitleChange = (event) => setNewBlog({ title: event.target.value, author: newBlog.author, url: newBlog.url })
    const onAuthorChange = (event) => setNewBlog({ title: newBlog.title, author: event.target.value, url: newBlog.url })
    const onUrlChange = (event) => setNewBlog({ title: newBlog.title, author: newBlog.author, url: event.target.value })
    
    const addBlog = (event) => {
        event.preventDefault()
        createBlog(newBlog)
        setNewBlog({ title: '', author: '', url: '' })
    }

    return (
        <form onSubmit={addBlog}>
            <div>
                Blog title: 
                <input 
                value={newBlog.title}
                onChange={onTitleChange}
                />
            </div>
            <div>
                Author:
                <input 
                value={newBlog.author}
                onChange={onAuthorChange}
                />
            </div>
            <div>
                URL:
                <input 
                value={newBlog.url}
                onChange={onUrlChange}
                />
            </div>
            <button type="submit">save</button>
        </form>
    )
}

export default BlogForm