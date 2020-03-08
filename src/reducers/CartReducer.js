export const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return [...state, {
        id: action.product.id,
        name: action.product.name,
        description: action.product.description,
        images: action.product.images,
        quantity: action.product.quantity
      }];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
}