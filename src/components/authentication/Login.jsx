import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("");


  function handleChange(event){
    setUsername(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={handleChange} value={username}/>
        </div>
      </form>

    <input type="submit" value="Login" />
    </div>
  )
}

export default Login