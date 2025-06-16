import { TableRow, TableCell, Avatar, Button, useTheme } from '@mui/material';
import Link from 'next/link';
import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { ICONS } from '@/constants/ICONS';
const TableRowContent = ({ row, tableHeader, handleDelete }) => {
  const theme = useTheme();
  return (
    <TableRow>
      {tableHeader.map((column, colIndex) => {
        if (column.id === 'image') {
          return (
            <TableCell
              key={colIndex}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt={row.title}
                src={`${UPLOAD_PATH}${row.image}`}
                sx={{ width: 40, height: 40 }}
              />
            </TableCell>
          );
        }
        if (column.id === 'icon') {
          return (
            <TableCell
              key={colIndex}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: theme.palette.secondary.main,
              }}>
              {ICONS[row.icon]}
            </TableCell>
          );
        }

        if (column.id === 'actions' && column.actionsBtns) {
          return (
            <TableCell
              key={colIndex}
              sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              {column.actionsBtns.map((action, btnIndex) => {
                const isDelete = action.label === 'حذف';
                const href = action.hrefBase
                  ? `${action.hrefBase}/${row._id}`
                  : action.href || '#';

                return isDelete ? (
                  <Button
                    key={btnIndex}
                    variant='contained'
                    color='error'
                    size='small'
                    startIcon={<DeleteRoundedIcon sx={{ ml: 1, mr: '0' }} />}
                    sx={{
                      'mx': 0.5,
                      'borderRadius': '10px',
                      '& > span': {
                        mr: 0,
                      },
                    }}
                    onClick={() => handleDelete(row._id, row.title)}>
                    {action.label}
                  </Button>
                ) : (
                  <Button
                    key={btnIndex}
                    variant='contained'
                    size='small'
                    sx={{
                      'mx': 0.5,
                      'borderRadius': '10px',
                      '& > span': {
                        mr: 0,
                      },
                    }}
                    component={Link}
                    startIcon={<EditRoundedIcon sx={{ ml: 1, mr: '0' }} />}
                    href={href}>
                    {action.label}
                  </Button>
                );
              })}
            </TableCell>
          );
        }

        return (
          <TableCell
            key={colIndex}
            sx={{ textAlign: 'center' }}>
            {row[column.id]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableRowContent;
