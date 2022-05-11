import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Login({ loginUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate(0);

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((data) => setUsers(data))
  }, [])


  function handleChange(event){
    setUsername(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();

    // const loginAccount = users.find((user) => user.username.toLowerCase() && user.password === username.toLowerCase() && password)
    
    const loginAccount = users.find((user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password)
    
    if(loginAccount){
      loginUser(loginAccount)
      navigate("/")
    } else {
      alert('username or password is incorrect. try again')
    }
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
            onChange={handleChange}/>
        </div>
        <div className="password">
            <label className="label">Password</label>
            <input 
            className="input" 
            type="password"
            value={password}
            onChange={handlePassword}
            />
        </div>
          <input className="submit" type="submit" value="Login" />
      </form>
    </div>
  </div>
  )
}

export default Login