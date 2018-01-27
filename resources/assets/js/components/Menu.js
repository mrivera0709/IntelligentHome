import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible} from 'react-materialize'
import Accordian from './Accordian';

const Menu = props => ({
//export default class Menu extends Component {
    
    render() {
        return (

            <div className="row">
                <div className="col s12">
                    
                <Accordian/> 
                    
                </div>
            </div>
    )}
});


export default Menu;
/*
if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}*/
