import React from 'react';

    const Cosmetics = () => {
        const cosmetics = [
            {id:1,name:'blic',price:100},
            {id:2,name:'clic',price:200},
            {id:3,name:'dlic',price:300},
            {id:4,name:'elic',price:400},
            {id:5,name:'flic',price:500}
        ]
        
    return (
        <div>
            <h1>Welcome to the cosmetic store</h1>
           {
            cosmetics.map((cosmetic) => console.log(cosmetic))
                
           }

        </div>
    );
};

export default Cosmetics;