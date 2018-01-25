import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle} from 'react-materialize'
import ProductCard from './Product';



export default class Main extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-12">
                    <ProductCard/>

                </div>
            </div>
        );
    }
}


/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
