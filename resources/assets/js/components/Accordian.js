import React from 'react';

const Accordian = props => ({
    componentDidMount() { 
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('.modal').modal(); //Initialize 
},
    render() {
        return (

            <ul className="collapsible" data-collapsible="accordion">
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1">
                        Entertainment 
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 1</span>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1">
                        Lighting
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 1</span>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1">
                        Security
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 1</span>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1">
                        Energy
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 1</span>
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 2</span>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header menuButton font26 textGradient1">
                        Hubs
                    </div>
                    <div className="collapsible-body menuSub">
                        <span>Sub 1</span>
                    </div>
                </li>
            </ul>

    )}
});

export default Accordian;