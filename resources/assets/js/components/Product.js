import React from 'react';
import {Button, Icon, Row, Col, Container, Collapsible, Card, CardPanel, CardTitle, Modal} from 'react-materialize';

const ProductCard = ({product}) => {

  //if the props product is null, return Product doesn't exist
  if(!product) {
    return(<div> </div>);
  }

  //Else, display the product data
  return(  
    <div className="productCard whiteBack"> 
      <div className="row">
        <div className='col-md-12'>
          <p className='textGradient1 noMargin font20 bold'> { product.product_brand }</p>
          <h4 className="header font26 " onClick={this.openModal}> { product.product_name } </h4>
        </div>
      </div> 
      <div className="row">
        <div className='col-md-12'>
          <p className=" left generalInfo"> 
            <span className=' textGradient1 bold'>
            COMPETITIVE PRICE RANGE : </span> { product.price } </p>
          
          <p className=" left generalInfo left20"> 
            <span className=' textGradient1 bold'>
            OUR RATING : </span> { product.finder_rating } </p>
          
          <a className=" textGradient1 waves-effect waves-light btn left20 right black blackBack bold" target="_blank" href={'https://smile.amazon.com/Roku-Streaming-Stick-Portable-power-packed/dp/' + product.asin + '?SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=' + product.asin }> 
            View Product Page </a>
            
          <a className="textGradient1 waves-effect waves-light btn  left20 right black blackBack bold" target="_blank" href={'https://smile.amazon.com/gp/registry/wishlist/add-item.html?asin.0=' + product.asin + '&SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=386001&creativeASIN=' + product.asin }> 
            Add to Wishlist </a>
                                      
          <a className="textGradient1 waves-effect waves-light btn  left20 right black blackBack bold" target="_blank" href={'https://smile.amazon.com/review/product/' + product.asin + '?SubscriptionId=AKIAJMGK2PQDBRMQM2XQ&tag=intelligen044-20&linkCode=xm2&camp=2025&creative=386001&creativeASIN' + product.asin }> 
            View Reviews </a>
        </div>
      </div>                     
      <div className="row">
        <div className ="col-md-5">
          <img onClick={this.openModal} src={ product.image_url }></img>
        </div>
        <div className ="col-md-7">
          <p className=''> <span className='textGradient1 bold'> Details : <br /> </span >
            { product.details } </p> <br />
          <p className=''> <span className=' textGradient1 bold'>Our Thoughts : <br /> </span >
            { product.finder_review} </p> <br />
        </div>
      </div>
    </div>
  )
}

export default ProductCard;