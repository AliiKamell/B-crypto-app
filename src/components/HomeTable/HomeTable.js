import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import { fetchCoins } from '../../store/actions/coin-action';
import { useDispatch } from 'react-redux';
import './HomeTable.css';
import { useSelector } from "react-redux"
import { useState } from 'react';
import { Link } from 'react-router-dom';



const columns = [
  { id: 'logo', label: '', minWidth: 170 },
  { id: 'rank', label: 'Rank', minWidth: 100, align: 'left' },
  { id: 'name', label: 'Name', minWidth: 100, align: 'left' },
  {
    id: 'symbol',
    label: 'Symbol',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'price',
    label: 'Price $',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'market-cap',
    label: 'Market-Cap $',
    minWidth: 170,
    align: 'left',
  },
];


export default function Top100Table() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins())    
  }, [dispatch])



  return (
    <Paper sx={{ width: '75%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 490 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  id='table-head'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((coin) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={coin.id} id='table-body'>
                    <TableCell id='table-cell' >
                      <Link to={`/${coin.rank}/${coin.id}`}>
                        <img src={coin.image} alt='coin-img' className='img-table' />
                      </Link>
                    </TableCell>
                    <TableCell id='table-cell'>  <Link className='tabel-link' to={`/${coin.rank}/${coin.id}`}>
                      {coin.rank}</Link></TableCell>
                    <TableCell id='table-cell'><Link className='tabel-link' to={`/${coin.rank}/${coin.id}`} >{coin.name}</Link></TableCell>
                    <TableCell id='table-cell'><Link className='tabel-link' to={`/${coin.rank}/${coin.id}`}>{coin.symbol}</Link></TableCell>
                    <TableCell id='table-cell'><Link className='tabel-link' to={`/${coin.rank}/${coin.id}`} id='coinLink'>{coin.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Link></TableCell>
                    <TableCell id='table-cell'><Link className='tabel-link' to={`/${coin.rank}/${coin.id}`}>{coin.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Link></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div id='table-pagination'>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={coins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Paper>
  );
}

