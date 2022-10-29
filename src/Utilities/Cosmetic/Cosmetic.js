import React from 'react';

const Cosmetic = (props) => {
    const {name,price,id} = props.singleObject;
    return (
        <div style={{border:'2px solid yellow',margin:'10px',borderRadius:'10px'}}>
            <h2>Buy this :{name}</h2>
            <p>Price is : {price}</p>
            <h4>The id is: {id}</h4>
        </div>
    );
};

export default Cosmetic;