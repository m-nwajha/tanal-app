// Import Next Hooks & Components.
import Link from 'next/link';

// Import MUI Components.
import { Avatar, Button } from '@mui/material';

// Import Style.
import { StyledDropdownNavItem } from './style';

const DropdownNavItem = ({ getDataItem, onClick }) => {
  return (
    <StyledDropdownNavItem onClick={onClick}>
        <Button
          key={getDataItem.id}
          component={Link}
          href={getDataItem.href}>
          <Avatar
            sx={{ ml: '1rem' }}
            alt={getDataItem.label}
            src={getDataItem.image}
          />
          {getDataItem.label}
        </Button>
    </StyledDropdownNavItem>
  );
};

export default DropdownNavItem;
