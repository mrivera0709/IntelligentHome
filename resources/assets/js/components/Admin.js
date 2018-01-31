import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct';

export default class Admin extends Component {
    
    constructor() {
        super();
        this.handleAddProduct = this.handleAddProduct.bind(this);
        //Initialize the state in the constructor
        this.state = {
            products: [],
            currentProduct: null,
            currentCategory: null,
        }
    }
    
    handleAddProduct(product) {
    
        fetch( 'api/products/', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            this.setState((prevState)=> ({
                products: prevState.products.concat(data),
                currentProduct : data
            }))
        })
    }

    render() {
        return (
            <div className="row">
                <AddProduct onAdd={this.handleAddProduct} />
            </div>
        );
    }
}



if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
