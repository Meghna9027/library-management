import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/history' activeStyle>
            History
          </NavLink>
          <NavLink to='/mystery' activeStyle>
            Mystery
          </NavLink>
          <NavLink to='/mythology' activeStyle>
            Mythology
          </NavLink>
          <NavLink to='/technology' activeStyle>
            Technology
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;