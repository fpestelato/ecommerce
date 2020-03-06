import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';
import ShoppingCart20 from '@carbon/icons-react/lib/shopping--cart/20';
import { Link, useHistory } from 'react-router-dom';

export default function AppHeader() {
  let history = useHistory();

  return (
    <>
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="E-Commerce">
          test
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Shopping Cart"
            onClick={()=> history.push('/cart') }
            style={{color: 'white', display: 'inherit', width: '5rem'}}
          >
            <ShoppingCart20 style={{margin: '0 0.5rem 0.5rem'}}/> <p>Cart</p>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </>
  );
};
