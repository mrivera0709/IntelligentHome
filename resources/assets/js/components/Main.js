import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle} from 'react-materialize';
import ProductCard from './Product';
import Modal from 'react-modal';

const modalStyle= {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        margin                : '0px',
        transform             : 'translate(-50%, -50%)',
    }
};

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
            currentSubcategory: 1,
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        fetch('/api/products')
            .then(response => {return response.json();})
            .then(products => {
                this.setState({ products });
                /*console.log('Products : ');
                console.log(products);*/
            });
        fetch('/api/category')
            .then(response => {return response.json();})
            .then(categories => {
                this.setState({ categories });
                /*console.log('Categories : ');
                console.log(categories);*/
            });
        fetch('/api/subcategory')
            .then(response => {return response.json();})
            .then(subcategories => {
                this.setState({ subcategories });
                /*console.log('Subcategories : ');
                console.log(subcategories);*/
            })
    }

    handleSubClick(subcategory) {
        this.setState({
            currentSubcategory:subcategory,
            currentProduct:null
        });
    }
    handleCatClick(category) {this.setState({currentCategory:category});}
    handleClick(product) {
        this.setState({
            currentProduct:product,
            currentSubcategory:1
        })
    }

    openModal() {this.setState({modalIsOpen: true});}
    closeModal() {this.setState({modalIsOpen: false});}

    renderSubCategory(currentCategory) {
        return this.state.subcategories.map(subcategory => {
            /*console.log('Category Id :' + currentCategory)
            console.log('Subcategory Id :' + subcategory.category_id)*/
            if(currentCategory === subcategory.category_id) {
                return (
                    <div className="collapsible-body white menuSub" key={subcategory.id} >
                        <span onClick={() =>this.handleSubClick(subcategory)}>{subcategory.subcategory_name}</span>
                    </div>   
                );
            }
        })
    }

    renderCategory() {
        return this.state.categories.map(category => {
            let catID = category.id
            /*console.log('CatID : ' + catID)*/
            return (
                <li key={category.id}>
                    <div className="collapsible-header menuButton font20 textGradient1"  onClick={() =>this.handleCatClick(category)}>
                        { category.category_name }
                    </div>
                    { this.renderSubCategory(catID) }
                </li>       
            )
        })
    }

    renderProducts() {
        return this.state.products.map(product => {
            let subCatID = this.state.currentSubcategory.id;
            /*console.log('SubCatID : ' + subCatID)*/
            if( subCatID === product.subcategory_id) {
                return ( 
                    <div className="col-md-4" key={ product.id } >
                        <p className="textGradient1"> { product.product_brand }</p>
                        <h4 className="header pcolor" onClick={ () =>this.handleClick(product)}/*{this.openModal}*/>
                            { product.product_name } </h4>
                        <div className="card horizontal" onClick={ () =>this.handleClick(product)} >
                            <div className="row">
                                <div className="col-md-12">
                                    <img 
                                    onClick={ () =>this.handleClick(product)} 
                                    src={ product.image_url }>
                                    </img>
                                </div>
                            </div>
                        </div> 
                    </div>
                )
            };
        })
    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2 noSidePadding">
                        <div className="row">
                            <div className="col-md-12 noSidePadding">    
                                <ul className="collapsible" data-collapsible="accordion">
                                { this.renderCategory() }
                                </ul>  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 noSidePadding">
                        <div className="containerFix container ">
                            <div className="row">
                                { this.renderProducts()}
                                <ProductCard product={this.state.currentProduct} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )       
    } 
};

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
};