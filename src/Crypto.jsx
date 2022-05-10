import React, { useState, useEffect } from 'react'


function Crypto({ crypto }) {
  const [amount, setAmount] = useState(0)
  const [money, setMoney] = useState(0)

  const {rank, name, image, symbol, price, marketCap} = crypto

  useEffect(() => {
    setMoney(amount * price)
  }, [amount])


  function plusButton(){
    setAmount((amount) => (amount + 1));
  }

  function minusButton(){
    if(amount > 0)
    setAmount((amount) => (amount - 1))
  }




  return (
          <tr>
            <td>{rank}</td>
            <td><img src={image} alt="crypto-pic" width="20" height="20"/>{name}</td>
            <td>{symbol}</td>
            <td>${price.toLocaleString()}</td>
            <td>${marketCap.toLocaleString()}</td>
            <td>
              <p>{amount}</p>
              <button onClick={minusButton}>-</button>
              <button onClick={plusButton}>+</button>
            </td>
            <td>{money}</td>
          </tr>
          
  )
}

export default Crypto;