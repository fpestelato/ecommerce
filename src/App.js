import React from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import AppHeader from './components/AppHeader';
import { Route, Switch } from 'react-router-dom';
import ProductsPage from './content/ProductsPage';
import CartPage from './content/CartPage';
import ProductDetail from './content/ProductDetail';
import Provider from './Provider';
import { HashRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Provider>
          <AppHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={ProductsPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/product/detail/:id" component={ProductDetail} />
            </Switch>
          </Content>
        </Provider>
      </Router>
    </>
  );
};