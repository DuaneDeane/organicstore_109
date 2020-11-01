import React, { Component } from 'react';

class ProductInCart extends Component {
    state = {  }
    render() { 
        return <h1>{this.props.data.product.title}</h1>;
    }
}
 
export default ProductInCart;