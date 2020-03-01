import React from 'react';
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


const AppHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName href="/" prefix="E-Commerce">
      test
    </HeaderName>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Shopping Cart" aria-labelledby="Cart">
        <ShoppingCart20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default AppHeader;
