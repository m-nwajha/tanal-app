import { TableRow, TableCell, Skeleton } from '@mui/material';
import { skeletonArr } from '@/utils/skeletonArr';

const TableSkeleton = ({ tableHeader }) =>
  skeletonArr(5).map((_, rowIndex) => (
    <TableRow key={`skeleton-${rowIndex}`}>
      {tableHeader.map((_, colIndex) => (
        <TableCell
          key={colIndex}
          sx={{ textAlign: 'center' }}>
          <Skeleton
            variant='rectangular'
            height={30}
          />
        </TableCell>
      ))}
    </TableRow>
  ));

export default TableSkeleton;
