import React from 'react'

const BlogForm = ({
    handleSubmit,
    onTitleChange,
    onAuthorChange,
    onUrlChange,
    newBlog
}) => {
    return (
        <form onSubmit={handleSubmit}>
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