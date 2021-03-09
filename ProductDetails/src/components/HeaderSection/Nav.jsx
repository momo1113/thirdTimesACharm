import React from 'react';
import {
  Logo, Input, SearchIcon, AddBag, QuanityTag, ShoopingCart
} from '../../elements/Nav.element.jsx';

const Nav = ({ quantitySizeSelected }) => (
  <>
    <Logo>humanitarian-hornbills</Logo>
    <Input>
      <SearchIcon />
      Search
    </Input>
    <ShoopingCart >
      <AddBag />
      {quantitySizeSelected !== 0 && (
        <QuanityTag>
          {quantitySizeSelected}
        </QuanityTag>
      )}
    </ShoopingCart>
  </>

);

export default Nav;
