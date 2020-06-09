import React from 'react'

const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
       <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username
                    <input
                        type="test"
                        value={username}
                        name="Username"
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm