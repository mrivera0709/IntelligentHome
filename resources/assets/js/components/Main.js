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
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                <div className="collapsible-body white menuSub">
                    <span key={subcategory.id} onClick={() =>this.handleSubClick(subcategory)}>{subcategory.subcategory_name}</span>
                </div>   
            );})
    }

    handleSubClick(subcategory) {
        this.setState({currentSubcategory:subcategory});
    }

    renderCategory() {
        return this.state.categories.map(category => {
            let catID = category.id
            /*console.log('CatID : ' + catID)*/
            return (
                <li>
                    <div className="collapsible-header menuButton font20 textGradient1" key={category.id} onClick={() =>this.handleCatClick(category)}>
                        { category.category_name }
                    </div>
                    { this.renderSubCategory(catID) }
                </li>       
            );})
    }

    handleCatClick(category) {
        this.setState({currentCategory:category});
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    afterOpenModal() {
        
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    renderProducts() {
        return this.state.products.map(product => {
            
            let amazonASIN = product.asin
            let subCatID = this.state.currentSubcategory.id
            console.log('SubCatID : ' + subCatID)

            if( subCatID === product.subcategory_id)
            return (
                <div className="col s12 m4" key={product.id} >
                    <p className='textGradient1'> { product.product_brand }</p>
                    <h4 className="header pcolor" onClick={this.openModal}>
                        { product.product_name } </h4>
                    <div className="card horizontal onClick={this.openModal}">
                        <div className="row">
                            <div className="col-md-12">
                                <img onClick={this.openModal} src={ product.image_url }></img>
                            </div>
                        </div>
                    </div> 
                    
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={modalStyle}
                        contentLabel="Example Modal"> 
                        
                        <div className="container modalGrid">    
                            <div className="row">
                                <button className=" textGradient1 waves-effect waves-light btn black right" onClick={this.closeModal}>Close</button>
                            </div>
                            
                            <div className="row">
                                <div className ="col-md-6">
                                    <div className="col-md-12">
                                        <img onClick={this.openModal} src={ product.image_url }></img>
                                    </div>
                                </div>
                                <div className ="col-md-6">
                                    <div>
                                        <p className='textGradient1'> { product.product_brand }</p>
                                    </div>
                                    <div>
                                        <h4 className="header font26" onClick={this.openModal}>
                                            { product.product_name } </h4>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="row">
                                <p> <span className=' textGradient1'>Details :  <br /> </span>{ product.details } </p>
                                    <br />

                                <p className="right-align"> <span className=' textGradient1'>Competitive Price Range : </span> 
                                { product.price } </p>

                                <p className="right-align"> <span className=' textGradient1'>Our Rating :  </span> 
                                { product.finder_rating } </p>
                                    <br />
                                
                                <a className=" textGradient1 waves-effect waves-light btn black left20 right" target="_blank" href={'https://www.amazon.com/Roku-Streaming-Stick-Portable-power-packed/dp/B075XN5L53?SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=' + amazonASIN }> 
                                View Product Page </a>
                                
                                <a className="textGradient1 waves-effect waves-light btn black left20 right" target="_blank" href={'https://www.amazon.com/gp/registry/wishlist/add-item.html?asin.0=B075XN5L53&SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=386001&creativeASIN=' + amazonASIN }> 
                                Add to Wishlist </a>
                                
                                <a className="textGradient1 waves-effect waves-light btn black left20 right" target="_blank" href={'https://www.amazon.com/review/product/B075XN5L53?SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=386001&creativeASIN' + amazonASIN }> 
                                View Reviews </a>
                            </div>
                        </div>
                    </Modal >
                </div>
                    
                
            );})
    }
    
    handleClick(product) {
        this.setState({currentProduct:product});
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
    
                    <div className="col-md-10 mainArea">
                        { this.renderProducts() }
                        <div className="row">
                            <div className=" col-md-12 w100 pcolor light font26 up60"> Browse through our menu to begin <span className="textGradient1 pcolor">find</span>ing </div>
                        </div>
                    </div>
                </div>
            </div> 
        )       
    } 
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
};


