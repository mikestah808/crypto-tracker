import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleChange(event){
    setUsername(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <div className="container"> 
    <div className="app-wrapper">
      <div>
        <h2 className="title">Account Login</h2>
      </div>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="username">
            <label className="label">Username</label>
            <input 
            className="input" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="password">
            <label className="label">Password</label>
            <input 
            className="input" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
          <input className="submit" type="submit" value="Login" />
      </form>
    </div>
  </div>
  )
}

export default Login