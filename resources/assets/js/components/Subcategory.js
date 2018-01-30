import React from 'react';

const Subcategory = ({subcategory}) => {


    if(subcategory.category_id===category.id)
        return (

            <div className="collapsible-body">
                <span>{subcategory.subcategory_name}</span>
            </div>

    )
};

export default Subcategory;