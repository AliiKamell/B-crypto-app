import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './TopGT.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from '../../store/actions/coin-action';


const columns = [
  { id: 'logo', label: '', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'symbol', label: 'Symbol', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'percent',
    label: '% 24h',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'market-cap',
    label: 'Market-Cap $',
    minWidth: 170,
    align: 'center',
  },
];


export default function TopGainersTable() {

  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return (
    <Paper sx={{ width: '75%', overflow: 'hidden' }} className='top-table'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coins
              .filter((coin) => coin.perc_24h > 0) // Filter coins with perc_24h > 0
              .sort((a, b) => b.perc_24h - a.perc_24h)
              .slice(0, 10)
              .map((coin) => (
                <TableRow role="checkbox" tabIndex={-1} key={coin.id} id='table-body'>
                  <TableCell>
                    <img src={coin.image} alt='coin-img' className='img-table' />
                  </TableCell>
                  <TableCell id='table-cell'>{coin.name}</TableCell>
                  <TableCell id='table-cell'>{coin.symbol}</TableCell>
                  <TableCell id='table-cell'>{coin.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                  <TableCell id='table-cell-gainers'>+{coin.perc_24h.toFixed(2)}</TableCell>
                  <TableCell id='table-cell'>{coin.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div id='tableG-pagination'>
        <TablePagination
          rowsPerPageOptions={0}
          component="div"
          count={0}
          rowsPerPage={0}
          page={0}
        />
      </div>
    </Paper>
  );
}