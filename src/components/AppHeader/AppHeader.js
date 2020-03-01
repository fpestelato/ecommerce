import React, { useState, useEffect } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';
import ShoppingCart20 from '@carbon/icons-react/lib/shopping--cart/20';
import { Link, Redirect } from 'react-router-dom';

export default function AppHeader() {
  const [] = useState([]);
  const [toCart, setCart] = useState(false);

  function handleRedirect() {
    setCart(!toCart);
  };

  return (
    <>
      {toCart ? <Redirect to="/cart" /> : null }

      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="E-Commerce">
          test
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Shopping Cart"
            onClick={()=> { handleRedirect() }}
          >
            <ShoppingCart20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </>
  );
};
