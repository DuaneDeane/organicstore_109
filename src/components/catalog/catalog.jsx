import React, { Component } from 'react';
import Product from '../product/product';
import ProductService from '../../services/productService';
import "./catalog.css";

class Catalog extends Component {
    state = {  
        products: [],
        categories: [],
        selectedCategory: '',
    };

    render() { 

        let prodsToDisplay = this.state.products;

        if (this.state.selectedCategory !== '') {
                prodsToDisplay = prodsToDisplay.filter((prod) => prod.category === this.state.selectedCategory);
        }

        return (
            <div className="catalog-page">

                <div className="categories">

                <div 
                onClick={() => this.selectCategory('')} key={''} className="btn-category">All Products
                </div>

                    {this.state.categories.map((category) => 
                    <div onClick={() => this.selectCategory(category)} key={category} className="btn-category">{category}</div>)}
                    </div>

                <div>
                    {prodsToDisplay.map((p) => <Product data={p} key={p.id}></Product>)}
                </div>

            </div>
        );
    }

    selectCategory = (category) => {
        console.log(category);
        this.setState({selectedCategory: category});
    }

    async componentDidMount() {
        let service = new ProductService();
        const data = await service.getProducts();
        this.setState({products: data});

        // identify the unique catagories
        let categories = [];
        for (let i=0; i < data.length; i++){
            let product = data[i];

            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
        }
        categories.sort();
        console.log(categories);

        this.setState({categories: categories});
    }
}
 
export default Catalog;