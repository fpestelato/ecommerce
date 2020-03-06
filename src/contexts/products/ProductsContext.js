import React, { createContext, useState } from 'react';
const productsJson = require('./products.json')

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(productsJson.products);

  return (
    <ProductsContext.Provider value={{products}}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;