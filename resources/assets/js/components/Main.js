import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {

    /*amazon = require('aws-product-api');
    var RESTobj = new amazon("KSK00QB2utITnVrRcOLCZTEOj4hD8XH10w2CNHY3", "AKIAJMGK2PQDBRMQM2XQ", "intelligen044-20");
    
    itemSearch() {
        RESTobj.Query({
            Operation: "ItemLookup",
            ItemID: "ID1,ID2",
            ResponseGroup: "Large"
        }, function(err, results) {
            if (err) {
                err.Error: [ { Code: [ String ], Message: [ String ] } ] 
            } else {
                items: [ { Request: [ [ Object ] ], Item: [ [ Object ], [ Object ] ] } ] 
            }
        });
    }*/




    render() {
        return (

            <div className="row">
                <div className="col-md-12">
                    <h1 className="textGradient1">
                    Main Component
                    </h1>
                </div>
            </div>
        );
    }
}


/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
