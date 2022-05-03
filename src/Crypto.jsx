import React from 'react'

function Crypto({ crypto }) {
  const {rank, name, image, symbol, price, marketCap} = crypto


  return (
    <div>
      <table className="crypto-table">
        <tbody>
          <tr>
            <td>{rank}</td>
            <td><img src={image} alt="crypto-pic" width="20" height="20"/></td>
            <td className="bolded">{name}</td>
            <td>{symbol}</td>
            <td>${price}</td>
            <td>${marketCap}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Crypto;