export const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      const foundIndex = state.findIndex(p => p.cartItemKey === action.product.cartItemKey);

      if (foundIndex === -1) {
        return [...state, {
          id: action.product.id,
          name: action.product.name,
          description: action.product.description,
          image: action.product.image,
          quantity: action.product.quantity,
          cartItemKey: action.product.cartItemKey,
        }];
      } else {
        state[foundIndex].quantity += action.product.quantity;
        return state;
      }
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.cartItemKey !== action.cartItemKey);
    default:
      return state;
  }
}