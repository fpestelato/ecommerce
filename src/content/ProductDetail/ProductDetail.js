import React, { useState, useContext, useEffect } from 'react';
import { Button, NumberInput, Form, FormGroup, FormLabel } from 'carbon-components-react';
import { ProductsContext } from '../../contexts/products/ProductsContext';
import { CartContext } from '../../contexts/cart/CartContext';
import BackButtonRow from '../../components/BackButtonRow';

export default function ProductDetail({ match, history }) {
  const { productId } = match.params;
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const [ product ] = useState(products.find(p=> p.id === productId));
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const test = React.createRef();

  const numberInputProps = {
    id:   'quantity-number-select',
    label: 'Quantity',
    light: true,
    min: 1,
    max: 100,
    value: quantity,
    step: 1,
    ref: test,
    numberInputArrowTranslationIds: {
      'increment.number': 'Increment number',
      'decrement.number': 'Decrement number',
    }
  };

  const { numberInputArrowTranslationIds, ...rest } = numberInputProps;
  const handleSubmit = (e) => {
    e.preventDefault();

    const { images, ...productProps } = product;

    dispatch({type: 'ADD_PRODUCT',  product: {
      image: images[selectedImageIndex], ...productProps, quantity
    }}, quantity);
  };

  return (
    <>
      <div className="bx--grid bx--grid--full-width product-detail-page">
        <BackButtonRow history={history} />
        <div className="bx--row product-detail__main">
          <div className="bx--col-lg-2 bx--col-md-2 product-detail__side-options">
            {
              product.images.map((image, index)=> (
                <img key={index}
                  className="product__side_image"
                  onClick={() => { setSelectedImageIndex(index)}}
                  src={product.images[index].url}
                  alt={product.description}
                />
              ))
            }
          </div>
          <div className="bx--col-lg-6 bx--col-md-6 product-detail__image">
            <img
              className="product-detail-product__image"
              src={product.images[selectedImageIndex].url}
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
                <NumberInput
                  {...rest}
                  onChange={()=>setQuantity(parseInt(test.current.value))}
                />
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