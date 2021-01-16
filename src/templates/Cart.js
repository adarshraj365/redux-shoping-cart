import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART } from "../redux/action";

function Cart({ cartItem, total, dispatch }) {
  return (
    <div className="container">
      {cartItem.map((item) => (
        <CartItem item={item} />
      ))}
      <div className="bottom-section">
        <hr />
        <div className="total">
          <h3>Total</h3>
          <h3>$ {total} </h3>
        </div>
        <div
          onClick={() => dispatch({ type: CLEAR_CART })}
          className="clear-cart"
        >
          clear cart
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cartItem: state.cartItem, total: state.total };
};

export default connect(mapStateToProps)(Cart);
