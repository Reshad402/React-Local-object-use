import React from 'react';
import { addToLS, removeItemDb } from '../../Fakeid/fakestorage';



const Cosmetic = (props) => {
    const {name,price,id} = props.singleObject;

    const addToCart = (id) =>{
        // console.log('Item added',id)
        addToLS(id)                     //! Declaring a function from fakestorage to add to the cart;
        
    }
    const addToName = (name) =>{
        console.log('Item added',name)  //! Declaring a function from fakestorage to store name;
        
    }

    const removeItem = (id) =>{
        removeItemDb(id)                //! Declaring a function from fakestorage to remove;
    }

    return (
        <div style={{border:'2px solid yellow',margin:'10px',borderRadius:'10px'}}>
            <h2>Buy this :{name}</h2>
            <p>Price is : {price}</p>
            <h4>The id is: {id}</h4>
            <button onClick={() =>addToCart(id)}>Add to Cart</button>
            <button onClick={() => addToName(name)}>Add the name</button>
            <button onClick={() => removeItem(id)}>Remove-Item</button>

            {/* //! Event handeler a kono kisu id or nam add korte chaile avabe korte lagbe */}
        </div>
    );
};

export default Cosmetic;