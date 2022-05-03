import React from 'react';
import Crypto from './Crypto';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CryptoList({ cryptos }) {


  const renderCryptos = cryptos.map((crypto) => {
    return (
      <Crypto key={crypto.id} crypto={crypto}/>
    )
  })

  return (
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                Rank#
              </TableCell>
              <TableCell align="left">
                Coin
              </TableCell>
              <TableCell align="left">
                Symbol
              </TableCell>
              <TableCell align="left">
                Price
              </TableCell>
              <TableCell align="right">
                Market Cap
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderCryptos}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default CryptoList;


  // const renderCryptos = cryptos.map((crypto) => {
  //   return <Crypto key={crypto.id} crypto={crypto}/>
  // })


  // return (
  //   <div>
  //       {renderCryptos}
  //   </div>
  // )


// export default CryptoList;


























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