import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize'
import ProductCard from './Product';
import Menu from './Menu';
import Subcategory from './Subcategory';

export default class Main extends Component {
    
    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            categories: [],
            subcategories: [],
            products: [],
            currentProduct: null,
            currentCategory: null
        }
    }
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products });
                console.log('Products : ');
                console.log(products);
            });
        fetch('/api/category')
            .then(response => {
                return response.json();
            })
            .then(categories => {
                //Fetched product is stored in the state
                this.setState({ categories });
                console.log('Categories : ');
                console.log(categories);
            });
        fetch('/api/subcategory')
            .then(response => {
                return response.json();
                
            })
            .then(subcategories => {
                //Fetched product is stored in the state
                this.setState({ subcategories });
                console.log('Subcategories : ');
                console.log(subcategories);
            });
    }

/*
    componentDidMount() {
        axios.all([
            axios.get('/api/products'),
            axios.get('/api/category'),
            axios.get('/api/subcategory')
        ]).then(axios.spread(function (products, categories, subcategories) {
            }))
            .catch(function(res) {
                console.log( res )
            })

    } */

    renderSubCategory() {
        return this.state.subcategories.map(subcategory => {
            return (
                
                <div className="collapsible-body white">
                    <span>{subcategory.subcategory_name}</span>
                </div>
                    
            );
        })
    }

    renderCategory() {
        return this.state.categories.map(category => {
            return (

                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" key={category.id} onClick={() =>this.handleClick(category)}>
                        { category.category_name }
                    </div>

                    { this.renderSubCategory() }

                </li>       
            );
        })
    }

    handleClick(category) {
        //handleClick is used to set the state
        this.setState({currentCategory:category});

    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */

                <div className="col s12 m6" key={product.id} >
                    <p className='textGradient1'>
                        { product.product_brand } 
                    </p>
                    <h4 className="header pcolor" onClick={
                () =>this.handleClick(product)}>{ product.product_name } </h4>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img className='materialboxed' src={ product.image_url }></img>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p> 
                                    <span className=' textGradient1'>Price Range : </span> 
                                    { product.price } 
                                </p>
                                <p>
                                    <span className=' textGradient1'>Our Rating :  </span> 
                                    { product.finder_rating } 
                                </p>
                            </div>
                            <div className="card-action textGradient1">
                                
                            </div>
                        </div>
                    </div> 
                </div>
            );
        })
    }
    
    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct:product});
    }

    render() {
        
        return (
            <div>
                <div className="row">
                
                
                
                    <div className="col-md-3 mainArea">
                        <div className="row">
                            <div className="col s12">    
                                <ul className="collapsible" data-collapsible="accordion">
                                { this.renderCategory() }
                                </ul>  
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-9 mainArea">
                    {/*  <ProductCard product={this.state.currentProduct} /> */}
                        { this.renderProducts() }
                    </div>
                </div>
            </div> 

        )       
    }
    
}


/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('root')) {
    
    ReactDOM.render(<Main />, document.getElementById('root'));
};


