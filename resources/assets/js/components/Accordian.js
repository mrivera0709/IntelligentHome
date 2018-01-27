import React from 'react';

const Accordian = props => ({

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
            </ul>

    )}
});

export default Accordian;