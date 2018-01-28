import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize'
import ProductCard from './Product';
import Menu from './Menu';

export default class Main extends Component {
    
    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            categories: [],
            subcategories: [],
            products: [],
        }
    }

    componentDidMount() {

        fetch('/api/products')
            .then(response => {
                return response.json();
                
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products });
            });

            
        /*fetch('/api/categories')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ categories });
            });
        fetch('/api/subcategories')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ subcategories });
            });*/
    }
    /*
    renderMenu() {
        return this.state.categories.map(category => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */ /*
                <li key={category.id} >
                    { category.name } 
                </li>      
            );
        })
    } */

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
                    <h4 className="header pcolor">{ product.product_name } </h4>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={ product.image_url }></img>
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
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                    </div>
                </div>


            );
        })
    }
    
    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 menuContainer">
                        <Menu />
                    </div>
                        
                    <div className="col-lg-9 mainArea">
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


