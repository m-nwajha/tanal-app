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
        href={getDataItem.link}>
        <Avatar
          sx={{ ml: '1rem' }}
          alt={getDataItem.title}
          src={getDataItem.image}
        />
        {getDataItem.title}
      </Button>
    </StyledDropdownNavItem>
  );
};

export default DropdownNavItem;
