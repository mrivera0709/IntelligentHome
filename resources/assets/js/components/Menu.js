import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible} from 'react-materialize'
import Accordian from './Accordian';

const Menu = ({ categories }) => ({
    
    render() {
        return (

            <div className="row">
                <div className="col s12">
                    
                    <ul className="collapsible" data-collapsible="accordion">

                        <li>
                            <div className="collapsible-header menuButton font26 textGradient1">
                                Menu 1
                            </div>
                            <div className="collapsible-body menuSub">
                                <span>Sub 1</span>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
    )}
});


export default Menu;
/*
if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}*/
