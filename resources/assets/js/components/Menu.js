import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize'

export default class Menu extends Component {

    render() {
        return (

            <div className="row">
                <div className="col s12">
                    
                    <Button className="findButton white-text font20" waves='light' node='a' href='http://www.google.com'> Home Improvement </Button>
                    
                </div>
            </div>
        );
    }
}



if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}
