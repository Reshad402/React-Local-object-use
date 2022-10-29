import React from 'react';

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
                cosmetics.map((cosmetic) => 
                    <Cosmetics key={cosmetic.id}
                    // !Every Cosmetic er modde akta id ase 
                    ></Cosmetics>)

           }

        </div>
    );
};

export default Cosmetics;