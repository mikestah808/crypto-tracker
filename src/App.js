import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import HomePage from './components/HomePage';
import Navbar from './components/navigation/Navbar';

function App() {
  const [search, setSearch] = useState("")




  return (
    <div>
    <BrowserRouter>
    <Navbar
     search={search} setSearch={setSearch}
     />
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;