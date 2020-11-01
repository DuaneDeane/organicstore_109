import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "../quantityPicker/quantityPicker";
import { connect } from 'react-redux';
import {addProductToCart} from '../../store/actions/actions';

class Product extends Component {
    state = {
        quantity: 1
    };

    render() {
        return( 
        <div className="product">
            <img src={"/products/"+this.props.data.image} alt=""></img>

        <h4>{this.props.data.title}</h4>

            <div className="prices">
                <h6>Price:{this.props.data.price}</h6>
                <h5>Total:{this.getTotal()}</h5>
            </div>

            <div className="controls">
                <QuantityPicker minimum={this.props.data.minimum || 1} onValueChange={ (qnty) => this.handleQuantityChange(qnty) }></QuantityPicker>
                <button onClick={this.addClicked} className="btn btn-sm btn-info">Add</button>
            </div>
        </div>
        
        );
    }

    addClicked = () => {
        console.log("Dispatching action");
        
        const addedProduct = {
            product: this.props.data,
            quantity: this.state.quantity
        };

        this.props.addProductToCart(addedProduct);
    };

    getTotal = () => {
        let total = this.props.data.price * this.state.quantity;
        return total.toFixed(2);
    }
    
    handleQuantityChange = (quantity) => {
        console.log("Qnty changed", quantity);
        this.setState({quantity: quantity});
    };
}

export default connect(null, {addProductToCart})(Product);
