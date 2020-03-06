import React from 'react';
import ProductsContextProvider from "./contexts/products/ProductsContext";
import CartProvider from "./contexts/cart/CartContext";

export default function Provider(props) {
  return (
    <ProductsContextProvider>
      <CartProvider>
        { props.children }
      </CartProvider>
    </ProductsContextProvider>
  );
}