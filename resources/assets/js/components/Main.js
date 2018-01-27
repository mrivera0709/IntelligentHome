import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize'
import ProductCard from './Product';
import Accordian from './Accordian';
import Menu from './Menu';

export default class Main extends Component {
    componentDidMount() { 
        $('.collapsible').collapsible();
        $('.materialboxed').materialbox();
        $('.modal').modal(); //Initialize 
    }
    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 menuContainer">
                        <Menu />
                    </div>

                    <div className="col-lg-9 mainArea">
                        <ProductCard/>
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


