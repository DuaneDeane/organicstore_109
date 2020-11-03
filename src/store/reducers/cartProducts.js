// reducer: a simple fin receives state and action and return a new state
const cartProductsReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT") {
    var copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "REMOVE_PRODUCT") {
    return state.filter((pc) => pc.product.id !== action.payload.product.id);
  }

  return state;
};

export default cartProductsReducer;
