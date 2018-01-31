import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize';
import ProductCard from './Product';

export default class Main extends Component {
    
    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            categories: [],
            subcategories: [],
            products: [],
            currentProduct: null,
            currentCategory: null,
            currentSubcategory: null
        }
    }
    componentDidMount() {
        fetch('/api/products')
            .then(response => {return response.json();})
            .then(products => {
                this.setState({ products });
                console.log('Products : ');
                console.log(products);
            });
        fetch('/api/category')
            .then(response => {return response.json();})
            .then(categories => {
                this.setState({ categories });
                console.log('Categories : ');
                console.log(categories);
            });
        fetch('/api/subcategory')
            .then(response => {return response.json();})
            .then(subcategories => {
                this.setState({ subcategories });
                console.log('Subcategories : ');
                console.log(subcategories);
            });
    }

    renderSubCategory(currentCategory) {
        return this.state.subcategories.map(subcategory => {
            /*console.log('Category Id :' + currentCategory)
            console.log('Subcategory Id :' + subcategory.category_id)*/
            if(currentCategory === subcategory.category_id)
            
            return (
                <div className="collapsible-body white">
                    <span key={subcategory.id} onClick={() =>this.handleClick(subcategory)}>{subcategory.subcategory_name}</span>
                </div>   
            );})
    }

    handleClick(subcategory) {
        this.setState({currentSubcategory:subcategory});
    }

    renderCategory() {
        return this.state.categories.map(category => {
            let catID = category.id
            console.log('CatID : ' + catID)
            return (
                <li>
                    <div className="collapsible-header menuButton font20 textGradient1" key={category.id} onClick={() =>this.handleClick(category)}>
                        { category.category_name }
                    </div>
                    { this.renderSubCategory(catID) }
                </li>       
            );})
    }

    handleClick(category) {
        this.setState({currentCategory:category});
    }

    renderProducts() {
        return this.state.products.map(product => {
            let subCatID = this.state.currentSubcategory
            console.log('SubCatID : ' + subCatID)
            if( subCatID === product.subcategory_id)
            return (
                <div className="col s12 m6" key={product.id} >
                    <p className='textGradient1'> { product.product_brand }</p>
                    <h4 className="header pcolor" onClick={() =>this.handleClick(product)}>
                        { product.product_name } </h4>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img className='materialboxed' src={ product.image_url }></img>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p> <span className=' textGradient1'>Price Range : </span> 
                                    { product.price } </p>
                                <p> <span className=' textGradient1'>Our Rating :  </span> 
                                    { product.finder_rating } </p>
                            </div>
                            <div className="card-action textGradient1">
                                
                            </div>
                        </div>
                    </div> 
                </div>
            );})
    }
    
    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct:product});
    }

    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 noSidePadding">
                        <div className="row">
                            <div className="col-md-12 noSidePadding">    
                                <ul className="collapsible" data-collapsible="accordion">
                                { this.renderCategory() }
                                </ul>  
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-9 mainArea">
                        { this.renderProducts() }
                    </div>
                </div>
            </div> 
        )       
    } 
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
};


