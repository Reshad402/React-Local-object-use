import React from 'react';

const Cosmetic = (props) => {
    const {name,price} = props.singleObject;
    return (
        <div>
            <h2>Buy this :{name}</h2>
            <p>Price is : {price}</p>
        </div>
    );
};

export default Cosmetic;