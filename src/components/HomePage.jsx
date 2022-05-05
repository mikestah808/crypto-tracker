import React, { useEffect, useState } from 'react'
import CryptoList from '../CryptoList'

const BASE_URL = "http://localhost:3000/cryptos";


function HomePage({ search }) {
  const [cryptos, setCryptos] = useState([])

  console.log(cryptos)

  //create functionality that will filter through the list of cryptocurrencies based on what is typed in the search input 
  //if the search input value does not match the listed crypto, then return everything else 

  const filterCrypto = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()))




  
  useEffect(() => {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(cryptoInfo => setCryptos(cryptoInfo))
    .catch(err => console.error(err));
  }, [])




  return (
    <div>
    <CryptoList cryptos={filterCrypto}/>
    
    </div>
  )
}

export default HomePage;

//create comment section in HomePage.jsx
//create