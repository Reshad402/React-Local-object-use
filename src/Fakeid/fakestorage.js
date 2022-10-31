const addToLS = id =>{
// ------------------------------------------------------------------------------------------------------------
    let shoppingCart = {};  //! Declaring a empty objects

        const storedCart = localStorage.getItem('shoppingCart'); //! Getting the value from localStorage

                        //! Get the shopping cart from localStorage 
            if(storedCart){
                shoppingCart = JSON.parse(storedCart);  //? ata json theke js a ana hoiche
            }
            // ! It need not be used cz it is declared in first stage as let 
            //?     else{
            //?        shoppingCart = {};
            //?    }
// _________________________________________________________________________________________________________________________
      



//! Add quantity to shoppingCart
    const quantity = shoppingCart[id];
    if(quantity){
        
        const newQuantity = quantity+1;
        shoppingCart[id] = newQuantity;
    }
    else{
        
        shoppingCart[id] = 1;
        
    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
    
}
// ---------------------------------------Remove Item ----------------------------------------------------

const removeItemDb = id =>{
    // console.log('removeItemDb',id)
    const storedCart =localStorage.getItem('shoppingCart');     //! Checking if the stored item is exists
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            // console.log('Exits')
            delete shoppingCart[id];
                        localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
        }

    }
}

export {addToLS,removeItemDb};