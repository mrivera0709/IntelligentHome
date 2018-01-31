
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddProduct extends Component {

  constructor(props) {
    super(props);
      
    this.state = {
      newProduct: {
        subcategory_id: '',
        product_name: '',
        product_brand: '',
        price: '',
        details: '',
        finder_rating: '',
        finder_review: '',
        asin: '',
        image_url: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(key, e) {
    var state = Object.assign({}, this.state.newProduct); 
    state[key] = e.target.value;
    this.setState({newProduct: state });
  }

  handleSubmit(e) {  
    e.preventDefault();
    this.props.onAdd(this.state.newProduct);
  }

  render() {
    
    return(
      <div> 
        <h2> Add new product </h2>
        <form onSubmit={this.handleSubmit}>
          <label> Subcategory: 
            <input type="text" onChange={(e)=>this.handleInput('subcategory_id',e)} />
          </label>
            <br />
          <label> Product Name: 
            <input type="text" onChange={(e)=>this.handleInput('product_name',e)} />
          </label>
            <br />
          <label> Product Brand: 
            <input type="text" onChange={(e)=>this.handleInput('product_brand',e)} />
          </label>
            <br />
          <label> Price: 
            <input type="text" onChange={(e)=>this.handleInput('price',e)} />
          </label>
            <br />
          <label> Details: 
            <input type="text" onChange={(e)=>this.handleInput('details',e)} />
          </label>
            <br />
          <label> Rating: 
            <input type="text" onChange={(e)=>this.handleInput('finder_rating',e)} />
          </label>
            <br />
          <label> Review: 
            <input type="text" onChange={(e)=>this.handleInput('finder_review',e)} />
          </label>
            <br />
          <label> ASIN: 
            <input type="text" onChange={(e)=>this.handleInput('asin',e)} />
          </label>
            <br />
          <label> Image URL: 
            <input type="text" onChange={(e)=>this.handleInput('image_url',e)} />
          </label>
            <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProduct;