import React, { useState, useContext, useEffect } from 'react';
import { Button, NumberInput, Form, FormGroup, FormLabel } from 'carbon-components-react';
import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';
import { ProductsContext } from '../../contexts/products/ProductsContext';
import { CartContext } from '../../contexts/cart/CartContext';

export default function ProductDetail({ match, history }) {
  const { id } = match.params;
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const [ product ] = useState(products.find(p=> p.id === id));
  const [quantity, setQuantity] = useState(1);

  const numberInputProps = {
    className: 'some-class',
    id: 'number-input-1',
    label: 'Quantity',
    light: true,
    min: 1,
    max: 100,
    value: 0,
    step: 1,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...product, quantity
    });

    dispatch({type: 'ADD_PRODUCT',  product: {
      ...product, quantity
    }}, quantity);
  }

  return (
    <>
      <div className="bx--grid bx--grid--full-width products-page">
        <div className="bx--row product-detail__backbutton">
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
        <div className="bx--row product-detail__main">
          <div className="bx--col-lg-2 bx--col-md-2">
            {
              product.images.map((image, index)=> (
                <img key={index}
                  className="product__side_image"
                  src={product.images[index].url}
                  alt={product.description}
                />
              ))
            }
          </div>
          <div className="bx--col-lg-6 bx--col-md-6 product-detail__image">
            <img
              className="product__image"
              src={product.images[0].url}
              alt={product.description}
            />
          </div>
          <div className="bx--col-lg-5 bx--col-md-5">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="bx--col-lg-3 bx--col-md-3 product-detail__quotation">
            <p>This product can be shipped worldwide</p>
            <Form onSubmit={handleSubmit}>
              <FormGroup legendText="">
                <NumberInput {...numberInputProps} onChange={event => ()=> {console.log(event)}} />
                <FormLabel>
                  Add products to the shopping cart to request a quotation. If you need a product in a different color or size, add it separately.
                </FormLabel>
                <Button type="submit">Add to cart</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}