'use client';

// Import React Hooks.
import { useEffect } from 'react';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Components.
import DropdownNavItem from '@/components/atoms/DropdownNavItem';

// Import API Config.
import { API_URL } from '@/config/API';

// Import Style.
import { StyledSubMenu } from './style';

const DropdownNav = ({ titleMenuItem, onClick }) => {
  // Use API.
  const { data, get } = useAPI(`${API_URL}${titleMenuItem}`);

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
            key={itemDropdown.id}
            getDataItem={itemDropdown}
            onClick={onClick}
          />
        );
      })}
    </StyledSubMenu>
  );
};

export default DropdownNav;
