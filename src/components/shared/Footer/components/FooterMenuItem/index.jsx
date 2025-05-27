// Import NextJS.
import Link from 'next/link';

// Import MUI Components.
import { Button } from '@mui/material';

// Import Constants.
import { PATHS } from '@/constants/PATHS';

// Import Style.
import { FooterMenuItemStyled } from './style';

const FooterMenuItem = ({ LinkItem }) => {
  return (
    <FooterMenuItemStyled>
      <Button
        component={Link}
        href={
          LinkItem.title ? `${PATHS.PROJECTS}/${LinkItem.title}` : LinkItem.href
        }>
        {LinkItem.title ? LinkItem.title : LinkItem.label}
      </Button>
    </FooterMenuItemStyled>
  );
};

export default FooterMenuItem;
