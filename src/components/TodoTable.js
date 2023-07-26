// components/TodoTable.js
import React, { useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, CircularProgress } from '@mui/material';
import { useGlobalContext } from '../contexts/TodoContext';
const rowsPerPage = 10; // Number of rows to display per page

const TodoTable = () => {
  const { data, loading } = useGlobalContext();
  const [page, setPage] = useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>NO DATA AVAILABLE</p>
    );
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell className="ellipsis-title" title={item.title}>
                  {item.title}
                </TableCell>
                <TableCell style={{ color: item.completed ? 'green' : 'red' }}>
                  {item.completed ? 'Valid' : 'Invalid'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </div>
  );
};

export default TodoTable;

