import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible} from 'react-materialize'
import Subcategory from './Subcategory';

const Menu = ({ subcategories }) => {
    
if(!subcategory) {
    return(<div> </div>);
}

return (

    <div className="row">
        <div className="col s12">
                    
            <ul className="collapsible" data-collapsible="accordion">

                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={1}>
                    Entertainment
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={2}>
                    Lighting
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={3}>
                    Security
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={4}>
                    Energy
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={5}>
                    Hubs
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1" value={6}>
                    Other
                    </div>
                </li>
            </ul>
                    
        </div>
    </div>
    )
}


export default Menu;
/*
if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}*/
