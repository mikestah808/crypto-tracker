import React, { useEffect, useState } from 'react'
import CryptoList from '../CryptoList'

const BASE_URL = "http://localhost:3000/cryptos";


function HomePage() {
  const [cryptos, setCryptos] = useState([])

  
  useEffect(() => {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(cryptoInfo => setCryptos(cryptoInfo))
    .catch(err => console.error(err));
  }, [])




  return (
    <div>
    <CryptoList cryptos={cryptos}/>
    </div>
  )
}

export default HomePage;