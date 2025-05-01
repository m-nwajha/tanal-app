// Import Next Hooks & Components.
import Link from 'next/link';

// Import MUI Components.
import AddRoundedIcon from '@mui/icons-material/AddRounded';

// Import Style.
import { StyledNavItem } from './style';
import { Button } from '@mui/material';

const NavItem = ({ navItem, dropdown, onClick, pathName }) => {
  return (
    <StyledNavItem
      onClick={() => !navItem?.children && onClick()}
      isDropdown={navItem.children ? true : false}>
      <Button
        component={Link}
        className={pathName === navItem.href ? 'active' : ''}
        href={!navItem?.children ? navItem.href : ''}>
        {navItem.label}
        {navItem?.children && <AddRoundedIcon fontSize='1rem' />}
      </Button>
      {navItem?.children && dropdown}
    </StyledNavItem>
  );
};

export default NavItem;
