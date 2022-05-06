import React from 'react';
import Crypto from './Crypto';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';


function CryptoList({ cryptos }) {


  const renderCryptos = cryptos.map((crypto) => {
    return (
      <Crypto key={crypto.id} crypto={crypto}/>
    )
  })

  return (
      <div>
        <h2>Cryptocurrency Prices by Market Cap</h2>
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