// Import NextJS.
import Link from 'next/link';

// Import MUI Components.
import { Button } from '@mui/material';

// Import Style.
import { QuickLinksItemStyled } from './style';

const QuickLinksItem = ({ LinkItem }) => {
  return (
    <QuickLinksItemStyled>
      <Button
        component={Link}
        href={LinkItem.href}>
        {LinkItem.label}
      </Button>
    </QuickLinksItemStyled>
  );
};

export default QuickLinksItem;
