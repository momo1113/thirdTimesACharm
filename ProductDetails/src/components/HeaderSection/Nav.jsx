import React from 'react';
import {
  Logo, Input, SearchIcon, AddBag,
} from '../../elements/Nav.element.jsx';

const Nav = () => (
  <>
    <Logo>Logo</Logo>
    <Input>
      <SearchIcon />
      Search
    </Input>
    <div>
      <AddBag />
      <span style={{ display: 'inlineBlock' }}>1</span>
    </div>
  </>

);

export default Nav;
