import React, { useEffect, useState } from 'react'
import CryptoList from '../../CryptoList'


const BASE_URL = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '552bea9cefmshf42d44fb9f4ab47p1b87dajsn23387e6f50f0'
  }
};


function HomePage() {
  const [cryptos, setCryptos] = useState([])

  
  useEffect(() => {
    fetch(BASE_URL, options)
    .then(resp => resp.json())
    .then(cryptoInfo => setCryptos(cryptoInfo))
    .catch(err => console.error(err));
  }, [])




  return (
    <main>
    <CryptoList cryptos={cryptos}/>
    </main>
  )
}

export default HomePage