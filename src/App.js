import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/static/authentication/Login';
import Signup from './components/static/authentication/Signup';
import HomePage from './components/static/HomePage';
import Navbar from './components/static/navigation/Navbar';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
    </Routes>
    </BrowserRouter>
    </div>

    //render a list of cryptocurrencies once page is loaded (useEffect)
      //what will the setup be? what kind of components?
        //<CryptocurrencyList/>
        //what does the <CryptoCurrencyList/> contain? 
        //container which will hold <Cryptocurrencies/>
            //child components?
            //<Cryptocurrencies/>
    
  );
}

export default App;