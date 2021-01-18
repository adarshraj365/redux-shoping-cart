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
  count: 3,
  total: 1799.97,
};

function reducer(state = initialStore, action) {
  if (action.type === INCREASE) {
    var newTotal = state.total;
    const newCartItem = state.cartItem.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
        newTotal += item.price;
      }
      return item;
    });
    return {
      ...state,
      cartItem: newCartItem,
      count: state.count + 1,
      total: newTotal,
    };
  } else if (action.type === DECREASE) {
    let newTotal = state.total;
    let tempCart = [];
    if (action.payload.amount === 1) {
      state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          newTotal -= item.price;
        }
        return item;
      });
      tempCart = state.cartItem.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
          newTotal = newTotal - item.price;
        }
        return item;
      });
    }
    return {
      ...state,
      cartItem: tempCart,
      count: state.count - 1,
      total: newTotal,
    };
  } else if (action.type === REMOVE) {
    return {
      ...state,
      cartItem: state.cartItem.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === CLEAR_CART) {
    return { ...state, cartItem: [], total: 0, count: 0 };
  }
  return state;
}

export default reducer;
