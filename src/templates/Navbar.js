import React from "react";
import { connect } from "react-redux";

function Navbar({ item_count }) {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <h2>Shopify</h2>
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
            <h2 className="count">{item_count}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { item_count: state.count };
};

export default connect(mapStateToProps)(Navbar);
