import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm({ loginUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  
  const navigate = useNavigate(0);


    useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) => setAccount(users))
    }, [])

    const existingAccount = account.find((account) => account.username.toLowerCase() === username.toLowerCase())
    console.log(account)
    



  function handleSubmit(event) {
    event.preventDefault();

    const formData = { 
      username,
      password
    }

    // create conditional which checks userObjects with formData property value pairs submitted
    // how do we do this? 

    if(existingAccount){
      alert('you already have an account!')
    } else {
      fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      //data (formData Obj which is the user info) is returned from the HTTP POST request 
      //invoke loginUser function which takes in the data as an argument and passes the data up as a callback prop
      //loginUser function will update currentUser to the formData object that was typed into the Signup Form
      loginUser(data)
      navigate('/');
    })
    .catch((error) => {
      console.error('Error:', error);
      })
    }  
    // alert("Nice! Directing you to the home page")
  }

  //what do i want?
  //i want to create a feature where IF the username and password object exists, i will not be logged in, it will decline the new account, and alert saying "looks like you already have an account"
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
            <input className="submit" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
)
}

export default SignupForm;