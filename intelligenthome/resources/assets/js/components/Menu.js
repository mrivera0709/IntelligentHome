import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div>
                        <Button waves='light' node='a' href='http://www.google.com'> Open Me In New Tab </Button>
                    </div>
                </div>
            </div>
        );
    }
}



if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}
