import { combineReducers } from "redux";
import cartCounterReducer from './cartCounter';
import cartProductsReducer from './cartProducts';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    cart: cartProductsReducer
});

export default rootReducer;