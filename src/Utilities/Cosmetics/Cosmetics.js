import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

    const Cosmetics = () => {
        const cosmetics = [
            {id:1,name:'Apple',price:150},
            {id:2,name:'Orange',price:200},
            {id:3,name:'Duck',price:300},
            {id:4,name:'Hen',price:400},
            {id:5,name:'Beef',price:800}
        ]
        
    return (
        <div>
            <h1>Welcome to the cosmetic store</h1>
           {
                     // cosmetics.map((cosmetic) => console.log(cosmetic))
                cosmetics.map((cosmetic) =><Cosmetic
                    singleObject = {cosmetic}   //!All properties are stored it singleObject
                                // ! For unique keys
                        key = {cosmetic.id}
                    >
                    {/* Ai khane props name ta cosmetic */}
                </Cosmetic>)
           }

        </div>
    );
};

export default Cosmetics;