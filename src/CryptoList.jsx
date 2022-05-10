import React from 'react';
import Crypto from './Crypto';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';


function CryptoList({ cryptos, handleAmount}) {

  // console.log(extraData);

  //if i want to get just the current price and 24hr price change percentage, how do i do it?
  //first, i will need the url then fetch the data 
  // where will i need the data? i will need the data within the crypto component 
  // after doing the fetch request, what do i do with the data given to me? 
  //you want to create state because the data is dynamic and constantly changing 
  //once you update state to the data that was fetched, what's next? 
  //i want to map through each object within the data array
  //what will i return from each object when i map through each element? i will return the current_price and price_change_percentage_24h


  const renderCryptos = cryptos.map((crypto) => {
    return (
      <Crypto key={crypto.id} crypto={crypto} handleAmount={handleAmount}/>
    )
  })

  return (
      <div>
        <h2>Top 20 Cryptocurrencies</h2>
        <Table>
          <TableHead>
            <tr>
              <TableCell align="left">
                Rank #
              </TableCell>
              <TableCell align="left">
                Coin
              </TableCell>
              <TableCell align="left" >
                Symbol
              </TableCell>
              <TableCell align="left">
                Price
              </TableCell>
              <TableCell align="left">
                Market Cap
              </TableCell>
              <TableCell align="left">
                Amount Owned
              </TableCell>
            </tr>
          </TableHead>
          <tbody>
            {renderCryptos}
          </tbody>
        </Table>
      </div>
  );
}

export default CryptoList;


























/* <table className="table">
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
    </table> */