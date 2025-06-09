'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import HeaderActions from './components/HeaderActions';
import TableSkeleton from './components/TableSkeleton';
import TableRowContent from './components/TableRowContent';
import DeleteSnackbar from './components/DeleteSnackbar';

const ReusableTable = ({ constants, data, onDelete, isLoading }) => {
  const { title, tableHeader, createBtn } = constants;
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(`هل أنت متأكد من حذف (${title})؟`);
    if (!confirmDelete) return;
    const result = await onDelete?.(id);
    if (result === false) setShowSnackbar(true);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ mt: 4, borderRadius: '20px' }}>
        <HeaderActions
          title={title}
          createBtn={createBtn}
        />

        <Table
          sx={{ minWidth: 650 }}
          aria-label='services table'>
          <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
            <TableRow>
              {tableHeader.map((column, idx) => (
                <TableCell
                  key={idx}
                  sx={{
                    color: theme.palette.quinary.main,
                    textAlign: 'center',
                  }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading && data.length === 0 ? (
              <TableSkeleton tableHeader={tableHeader} />
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={tableHeader.length}
                  sx={{ textAlign: 'center' }}>
                  <Typography variant='body1'>
                    لا يوجد أي عناصر لعرضها
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRowContent
                  key={row._id || rowIndex}
                  row={row}
                  tableHeader={tableHeader}
                  handleDelete={handleDelete}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteSnackbar
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />
    </>
  );
};

export default ReusableTable;
