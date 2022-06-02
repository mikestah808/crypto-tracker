import React from 'react';
import Crypto from './Crypto';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';


function CryptoList({ cryptos }) {

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
      <Crypto key={crypto.id} crypto={crypto}/>
    )
  })

  return (
      <div>
        <h2>Top 20 Cryptocurrencies</h2>
        <Table>
          <TableHead>
            <tr>
              <TableCell align="center">
                Rank #
              </TableCell>
              <TableCell align="center">
                Coin
              </TableCell>
              <TableCell align="center" >
                Symbol
              </TableCell>
              <TableCell align="center">
                Price
              </TableCell>
              <TableCell align="center">
                Market Cap
              </TableCell>
              <TableCell align="center">
                Quantity Owned
              </TableCell>
              <TableCell align="center">
                Price Amount
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