import React, { useState } from 'react'

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  function handleSubmit(event) {
    event.preventDefault();
    const formData = { 
      username,
      password
    }
    console.log(formData);
  }






  return (
    <div className="container"> 
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
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
            <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
)
}

export default SignupForm;