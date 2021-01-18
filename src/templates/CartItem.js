import React from "react";
import { INCREASE, DECREASE, REMOVE } from "../redux/action";
import { connect } from "react-redux";

function CartItem({ item, remove, increase, decrease }) {
  return (
    <div className="item-wrapper">
      <div className="first">
        <img src={item.img} alt="item " />
      </div>
      <div className="second">
        <p className="item-name"> {item.title} </p>
        <p className="item-price">${item.price}</p>
        <a className="remove-btn" onClick={() => remove()}>
          remove
        </a>
      </div>
      <div className="third">
        <i onClick={() => increase()} className="fas fa-chevron-up"></i>
        <h3>{item.amount}</h3>
        <i onClick={() => decrease()} className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { item } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id: item.id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id: item.id } }),
    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: { id: item.id, amount: item.amount },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
