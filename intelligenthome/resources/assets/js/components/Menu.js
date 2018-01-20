import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize'

export default class Menu extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-sm-12">
                    
                    <Button waves='light' node='a' href='http://www.google.com'> Test Button </Button>
                    
                </div>
            </div>
        );
    }
}



if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}
