import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import SignupForm from './components/authentication/SignupForm';
import HomePage from './components/HomePage';
import Navbar from './components/navigation/Navbar';

const BASE_URL = "http://localhost:3000";

//wHAT DO I WANT TO ADD TO MY PROJECT? 
// ---> HOW DO I ACTIVELY TRACK CURRENT PRICE AND MARKET CAP OF CRYPTO AND HOW WILL I MAKE IT RENDER ON BROWSER

function App() {
  //create piece of state and update state to be the value of the search input value 
  const [search, setSearch] = useState("")
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  //create a function that will filter through the list of cryptocurrencies based on what is typed in the search input 
  //if the search input value does not match the listed crypto, then return everything else 

  function loginUser(user){
    setCurrentUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id);
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('user_id');
  }

    useEffect(() => {
      const userId = localStorage.getItem('user_id');
      if(userId && !loggedIn){
        //the userId is the id number of that specific user within the db.json
        fetch(BASE_URL + '/users/' + userId)
        .then((resp) => resp.json())
        .then((data) => loginUser(data))
      }
    }, [])

  return (
    <BrowserRouter>
    <Navbar
    loggedIn={loggedIn}
    logoutUser={ logoutUser }
    search={search} setSearch={setSearch}
     />
    <Routes>
      <Route path="/" element={ <HomePage search={search}/> }/>
      <Route path="/login" element={ <Login loginUser={loginUser}/> } />
      <Route path="/signup" element={ <SignupForm loginUser={loginUser}/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;