import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products/ProductsContext';
import { Tile } from 'carbon-components-react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { products } = useContext(ProductsContext)

  return <div className="bx--row">
    { products.map(product => (
      <div className="bx--col-md-2 product-list__item" key={product.id}>
        <img
          className="product__image"
          src={product.images[0].url}
          alt={product.description}
        />
        <Tile light={false}>
          <p>{product.name}</p>
          <Link to={`/product/detail/${product.id}`}>View</Link>
        </Tile>
      </div>
    ))}
  </div>
}