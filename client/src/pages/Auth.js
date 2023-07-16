import React, { useState } from 'react'

const Auth = () => {
  return (
    <div className='auth'>
        <Login />
        <Register />
    </div>
  )
}

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Login" />
    )
}

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Register" />
    )
}

const Form = ({username, setUsername, password, setPassword, label}) => {
    return (
        <div className='auth-container'>
            <form>
                <h2>{label}</h2>
                <div className='form-group'>
                    <label htmlFor="username">Username : </label>
                    <input type='text' id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password : </label>
                    <input type='text' id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type='submit'>{label}</button>
            </form>
        </div>
    )
}

export default Auth