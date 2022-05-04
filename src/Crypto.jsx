import React from 'react'


function Crypto({ crypto }) {
  const {rank, name, image, symbol, price, marketCap} = crypto


  return (
          <tr>
            <td>{rank}</td>
            <td><img src={image} alt="crypto-pic" width="20" height="20"/>{name}</td>
            <td>{symbol}</td>
            <td>${price}</td>
            <td>${marketCap}</td>
          </tr>
  )
}

export default Crypto;