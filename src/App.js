import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/static/authentication/Login';
import Signup from './components/static/authentication/Signup';
import HomePage from './components/static/HomePage';
import Navbar from './components/static/navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;