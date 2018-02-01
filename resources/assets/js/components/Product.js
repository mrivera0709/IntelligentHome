import React from 'react';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize';

const ProductCard = ({product}) => {

  //if the props product is null, return Product doesn't exist
  if(!product) {
    return(<div> </div>);
  }

  //Else, display the product data
  return(  
    <div > 
      <h2> {product.product_name} </h2>
      <p> {product.details} </p>
      <h3> Status {product.finder_review ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.price} </h3>
      
    </div>

  )
}

export default ProductCard;