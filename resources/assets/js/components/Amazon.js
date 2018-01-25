import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const client = amazon.createClient({
  awsId: "AKIAJMGK2PQDBRMQM2XQ",
  awsSecret: "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",
  awsTag: "intelligen044-20"
});



const Amazon = props => ({

    render() {
      return (
      
        <div className="card horizontal col s6">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6"></img>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p value="searchOne" ></p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        
        

      
      )}
});

export default Amazon;