import React, { Component } from 'react';
import "./productInCart.css";
import {removeProductFromCart} from '../../store/actions/actions';
import { connect } from 'react-redux';

class ProductInCart extends Component {
    state = {  }
    render() { 
        return (
            <div className='cart'> 
                 <h1>{this.props.data.product.title}</h1>
                 <img src={"/products/"+this.props.data.product.image}></img>
                 <li>Quantity: {this.props.data.quantity}</li>
                 <li>Price: ${this.props.data.product.price}</li>
                 <li>Total: ${this.props.data.quantity * this.props.data.product.price}</li>
                 <button onClick={this.removeClicked} className="btn btn-sm btn-info">Remove</button>
            </div>
        )
    }
    removeClicked = () => {
        console.log("Dispatching action");
        
        var removedProduct = {
            product: this.props.data.product,
            quantity: this.props.data.quantity
        };

        this.props.removeProductFromCart(removedProduct);
    }
}
export default connect(null, {removeProductFromCart})(ProductInCart);