'use client';

// Import React Hooks.
import { useEffect } from 'react';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Components.
import DropdownNavItem from '../DropdownNavItem';

// Import API Config.
import { API_KEY, API_URL } from '@/config/API';

// Import constants.
import { END_POINTS } from '@/constants/END_POINTS';

// Import Style.
import { StyledSubMenu } from './style';

const DropdownNav = ({ titleMenuItem, onClick }) => {
  // Use API.
  const { data, get } = useAPI(END_POINTS.PROJECTS, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);

  return (
    // Render Dropdown.
    <StyledSubMenu>
      {data.map(itemDropdown => {
        return (
          <DropdownNavItem
            key={itemDropdown._id}
            getDataItem={itemDropdown}
            onClick={onClick}
          />
        );
      })}
    </StyledSubMenu>
  );
};

export default DropdownNav;
