import {
  INCREASE,
  DECREASE,
  REMOVE,
  TOTAL,
  ITEM_COUNT,
  CLEAR_CART,
} from "./action";
import cartItem from "../data";

const initialStore = {
  cartItem: cartItem,
  count: 5,
  total: 0,
};

function reducer(state = initialStore, action) {
  if (action.type === INCREASE) {
    const newCartItem = state.cartItem.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cartItem: newCartItem,
    };
  } else if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cartItem.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return { ...state, cartItem: tempCart };
  } else if (action.type === REMOVE) {
    return {
      ...state,
      cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === CLEAR_CART) {
    return { ...state, cartItem: [] };
  }
  return state;
}

export default reducer;
