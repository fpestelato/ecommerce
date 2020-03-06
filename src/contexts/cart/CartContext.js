import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../../reducers/CartReducer';

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartProducts, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{cartProducts, dispatch}}>
      { props.children }
    </CartContext.Provider>
  );
}

export default CartProvider;