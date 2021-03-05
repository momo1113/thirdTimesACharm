import React from 'react';
import { NavWrapper, Logo, Search } from '../../elements/Nav.element.jsx';

const Nav = () => (
  <NavWrapper>
    <Logo>Logo</Logo>
    <Search>
      <input />
      <h2> search</h2>
      <button type="submit">bag</button>
    </Search>
  </NavWrapper>

);

export default Nav;
