import React ,{createContext}from 'react';

export const State=createContext();
export default function GlobalState({children}){
const [cart,addItemToCart]=React.useState([]);

 function addItem(){

    addItemToCart((pre)=>[...pre,Math.random()])

}
return(
    <State.Provider
    value={
     {
         cart:cart,
         addItemToCart:addItemToCart
     }
    }
    >
   {children} 
    </State.Provider>
)

}