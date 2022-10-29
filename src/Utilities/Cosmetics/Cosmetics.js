import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

    const Cosmetics = () => {
        const cosmetics = [
            {
              "id": "635d3ea0ceadde4412472f94",
              "price": 30,
              "name": "Eleanor Richard"
            },
            {
              "id": "635d3ea0756268eb80d7f20e",
              "price": 31,
              "name": "Durham Villarreal"
            },
            {
              "id": "635d3ea03c2904c34d7ee6ed",
              "price": 28,
              "name": "Geraldine Velasquez"
            },
            {
              "id": "635d3ea0baebfa5fb79050ff",
              "price": 22,
              "name": "Casey Donovan"
            },
            {
              "id": "635d3ea0c10b4351cd69a766",
              "price": 22,
              "name": "Sanders Marquez"
            },
            {
              "id": "635d3ea0b0d6dfba54442b55",
              "price": 36,
              "name": "Chris Watson"
            },
            {
              "id": "635d3ea0a6f637605341f40e",
              "price": 39,
              "name": "Hickman Mckee"
            }
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