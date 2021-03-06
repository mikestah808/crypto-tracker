import React, { useEffect, useState } from 'react'
import CryptoList from '../CryptoList'

const BASE_URL = "http://localhost:3000/cryptos";

// const API_URL ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"


function HomePage({ search }) {

  const [cryptos, setCryptos] = useState([])
//create functionality that will filter through the list of cryptocurrencies based on what is typed in the search input 
//if the search input value does not match the listed crypto, then return everything else 

//.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate 
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