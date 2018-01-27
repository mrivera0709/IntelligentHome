import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Row, Col, Container, Collapsible} from 'react-materialize'
import Menu from './Menu';
import Main from './Main';

export default class Index extends Component {
    
    render() {
        return (
          <div className="row">
            <div class="col-md-3 menuContainer">
              <Menu />
            </div>

            <div class="col-md-9 mainArea">
              <Main />
            </div>
          </div>
        );
    }
}



if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
