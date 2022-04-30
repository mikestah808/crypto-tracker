import React from 'react'
import Crypto from './Crypto'

function CryptoList({ cryptos }) {
  console.log(cryptos)


  const renderCryptos = cryptos.map((crypto) => {
    return <Crypto key={crypto} crypto={crypto}/>
  })




  return (
    <table>
      {renderCryptos}
    </table>
  )
}

export default CryptoList;



{/* <table className="table">
      <thead>
        <tr>
          <th scope="col" >Rank</th>
          <th scope="col">Name and Symbol</th>
          <th scope="col">Price</th>
          <th scope="col">24h %</th>
          <th scope="col">7d %</th>
          <th scope="col">Market Cap</th>
          <th scope="col">Volume</th>
          <th scope="col">Circulating Supply</th>
          <th scope="col">Last 7 Days</th>
        </tr>
      </thead>
    </table> */}