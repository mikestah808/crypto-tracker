import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import SignupForm from './components/authentication/SignupForm';
import HomePage from './components/HomePage';
import Navbar from './components/navigation/Navbar';

function App() {
  //create piece of state and update state to be the value of the search input value 
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  //create a function that will filter through the list of cryptocurrencies based on what is typed in the search input 
  //if the search input value does not match the listed crypto, then return everything else 

  function loginUser(user){
    setCurrentUser(user);
    setLoggedIn(true)
  }


  return (
    <div>
    <BrowserRouter>
    <Navbar
     search={search} setSearch={setSearch}
     />
     { loggedIn ? <h1>Logged In!</h1> : null }
    <Routes>
      <Route path="/" element={ <HomePage search={search}/> }/>
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <SignupForm loginUser={loginUser}/> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;