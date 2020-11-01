import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCartCounter } from "../../store/actions/actions";
import ProductInCart from '../productincart/productInCart';

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Cart</h1>
          {this.props.cart.map(p => <ProductInCart data={p} key={p.product.id}></ProductInCart>)}
      </div>
    );
  }

  hanldeButtonClick = () => {
    console.log("Clicked!!!");
    this.props.incrementCartCounter();
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(mapStateToProps, { incrementCartCounter })(Cart);
