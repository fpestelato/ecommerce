import React, { useContext } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'carbon-components-react';
import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';
import { CartContext } from '../../contexts/cart/CartContext';
import ProductsCartItems from '../../components/ProductChartItem';
import { Link } from 'react-router-dom';

const CartPage = ({ match, history }) => {
  const { cartProducts, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="bx--grid bx--grid--full-width cart-page">
        <div className="bx--row cart-page__backbutton">
          <Button
            className="back-button"
            iconDescription="Back icon"
            kind="ghost"
            onClick={()=> history.goBack() }
            size="default"
            tabIndex={0}
            type="button"
          >
            <ArrowLeft16/>Back
          </Button>
        </div>
        <div className="bx--row cart-page__main">
          <div className="bx--col-lg-16 bx--col-md-16">
            <h2>Shopping Cart</h2>
          </div>
          <div className="bx--col-lg-16 bx--col-md-16">
            <p>{cartProducts.length} items</p>
          </div>
          <div className="bx--col-lg-12 bx--col-md-12 cart-page__products-list">
            <ProductsCartItems />
          </div>
          <div className="bx--col-lg-4 bx--col-md-4">
            <p>Subtotal: {cartProducts.length} items</p>
              <Form>
                <FormGroup legendText="">
                  <Button className="cartButton" >Place Order</Button>
                  <Button className="cartButton" kind="tertiary" as={Link} to="/">Continue Shopping</Button>
                  <FormLabel>
                  By placing your order, you agree to the IBM purchase policies and IBM's personal information policies.
                  </FormLabel>
                </FormGroup>
              </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;