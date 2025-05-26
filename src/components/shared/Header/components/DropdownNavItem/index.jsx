// Import Next Hooks & Components.
import Link from 'next/link';

// Import MUI Components.
import { Avatar, Button } from '@mui/material';

// Import Constants.
import { PATHS } from '@/constants/PATHS';
import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';

// Import Style.
import { StyledDropdownNavItem } from './style';

const DropdownNavItem = ({ getDataItem, onClick }) => {
  return (
    <StyledDropdownNavItem onClick={onClick}>
      <Button
        key={getDataItem.id}
        component={Link}
        href={`${PATHS.PROJECTS}/${getDataItem.title}`}>
        <Avatar
          sx={{ ml: '1rem' }}
          alt={getDataItem.title}
          src={`${UPLOAD_PATH}${getDataItem.image}`}
        />
        {getDataItem.title}
      </Button>
    </StyledDropdownNavItem>
  );
};

export default DropdownNavItem;
