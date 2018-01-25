import React from 'react';


const ProductCard = props => ({

    render() {
        return (
        
          <div className="card horizontal col s6">
            <div className="card-image">
              <img src="https://images-na.ssl-images-amazon.com/images/I/31-7xZTklPL.jpg"></img>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h3> Philips Hue White A19 60W Equivalent Smart Bulb Starter Kit (Compatible with Amazon Alexa, Apple HomeKit, and Google Assistant) </h3>
                
                <p>Enhance your home with soft white lighting, controlled remotely wherever you are. Set timers and light schedules, automating your lights to make it seem like someone is home even when you are away.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          
          

        
        )}
});

export default ProductCard;