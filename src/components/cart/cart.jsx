import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCartCounter } from "../../store/actions/actions";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <button className="btn btn-warning" onClick={this.hanldeButtonClick}>
          Click me
        </button>
      </div>
    );
  }

  hanldeButtonClick = () => {
    console.log("Clicked!!!");
    this.props.incrementCartCounter();
  };
}

export default connect(null, { incrementCartCounter })(Cart);
