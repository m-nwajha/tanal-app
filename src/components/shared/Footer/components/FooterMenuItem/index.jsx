// Import NextJS.
import Link from 'next/link';

// Import MUI Components.
import { Button } from '@mui/material';

// Import Style.
import { FooterMenuItemStyled } from './style';

const FooterMenuItem = ({ LinkItem }) => {
  return (
    <FooterMenuItemStyled>
      <Button
        component={Link}
        href={LinkItem.href}>
        {LinkItem.label}
      </Button>
    </FooterMenuItemStyled>
  );
};

export default FooterMenuItem;
