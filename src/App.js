import React from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import AppHeader from './components/AppHeader';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './content/ProductsPage';
import CartPage from './content/CartPage';

export default function App() {
  return (
    <>
      <AppHeader/>
      <Content>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Content>
    </>
  );
};