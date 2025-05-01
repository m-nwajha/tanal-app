'use client';

// Import Next Hooks & Components.
import { usePathname } from 'next/navigation';

// Import Components
import BtnToggleNav from '@/components/atoms/BtnToggleNav';
import NavItem from '@/components/atoms/NavItem';
import NavBtn from '@/components/atoms/NavBtn';
import DropdownNav from '../DropdownNav';

// Import Constants
import { NAVBAR } from '@/constants/NAVBAR';

// Import Style.
import { StyledNav } from './style';

const Navbar = ({ navFixed, toggleMenuMobile, menuState }) => {
  // usePathname.
  const pathName = usePathname();

  return (
    <StyledNav>
      {/** Open Nav Menu */}
      <BtnToggleNav
        type='open'
        navFixed={navFixed}
        onClick={toggleMenuMobile}
      />

      {/** Start Nav Menu */}
      <nav className={menuState ? 'menu_active' : ''}>
        <div className='box_close'>
          {/** Close Nav Menu */}
          <BtnToggleNav
            type='close'
            onClick={toggleMenuMobile}
          />
        </div>
        <ul>
          {/** Nav Item */}
          {NAVBAR.map(navItem => {
            return (
              <NavItem
                onClick={() => menuState && toggleMenuMobile()}
                key={navItem.id}
                pathName={pathName}
                navItem={navItem}
                // If Dropdown.
                dropdown={
                  <DropdownNav
                    onClick={() => menuState && toggleMenuMobile()}
                    titleMenuItem={navItem.href}
                  />
                }
              />
            );
          })}
          {
            // Nav btn On Mobile.
            menuState && <NavBtn />
          }
        </ul>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
