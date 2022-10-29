import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

    const Cosmetics = () => {
        const [cosmetics,setCosmetics] = useState([]);
        useEffect( () =>{
            fetch('data.json')
            .then(res =>res.json())
            .then(data => setCosmetics(data))
        },[])

        
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