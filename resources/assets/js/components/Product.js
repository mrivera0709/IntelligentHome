import React from 'react';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize';

const ProductCard = props => ({

    render() {
        return (
        <div>
          <div className="card horizontal col s6">
            <div className="card-image">
              <img className="responsive-img materialboxed" src="https://images-na.ssl-images-amazon.com/images/I/31-7xZTklPL.jpg"></img>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5> Philips Hue White A19 60W Equivalent Smart Bulb Starter Kit (Compatible with Amazon Alexa, Apple HomeKit, and Google Assistant) </h5>
                
                <p>69.99</p>
  
                

              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          
        </div>
          


          
        )}
});

export default ProductCard;