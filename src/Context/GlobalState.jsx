import { queryAllByPlaceholderText } from '@testing-library/react';
import React ,{createContext}from 'react';

export const State=createContext();
const ADD_ITEM="ADD_ITEM";
const REMOVE_ITEM="REMOVE_ITEM";
const initialState={
    cart:[],
    orders:[]
}
function filterIdFromState(id,state){
    console.log("state",state,"---itemId---",id);
    return state.cart.filter((item)=>{
        console.log(item);
         if(item.id!==id){
             return true;
         }
    })
}
function reducer(preState,Action){
    try{
   console.log("action",Action);
   console.log("preState",preState);
   let updatedCart= getUpdatedCart(Action.data.id,Action,preState);
     switch(Action.type){

        case ADD_ITEM:{

     
            //The above code works but without StrictMode in react
        // preState.cart.push(Action.data);
        // preState.orders.push(Action.data);
        // const updatedState={
        //     ...preState,
        //     cart:[...preState.cart,Action.data]
        //     };
        // console.log('before returning state', 
        //     updatedState
        //     );
        // return {
        //     ...preState
        // }
        //END - dont remove,it helps to undestand concept (reducer gets called 2 time for purity check)
        //link- https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice


        //first find the id the id is present in array 
        //if yes then increase the count of that array else create new element
        // [ cart:[{id, category_id , productCount}] ]
        
        
        return{
            ...preState,
            cart:updatedCart

          }

    }

        case REMOVE_ITEM:{
           // const updateStateCart=filterIdFromState(Action.data,preState)
            console.log("updateCart",updatedCart);
            return {
                ...preState,
                cart:updatedCart
             }
        }

     }
    }catch(error){
      console.log("error message->", error.message);
    }

}


function getUpdatedCart(id, Action,preState){
    const  isPresent=preState.cart.find((item)=>item.id===id);
         console.log("Actionin getUdate",Action);
    if(isPresent){
        preState.cart.forEach((item)=>{
        console.log("item",item)
            if(item.id===id){
                if(Action.type===ADD_ITEM){
                    item.productCount=Action.data.productCount;
                }else{
                    item.productCount=Action.data.productCount;
                    if(item.productCount===0){
                        //remove that item
                       const updatedCartAfterDel=preState.cart.filter((item)=>{
                            if(item.id!==id)return;
                       })
                       preState.cart=updatedCartAfterDel;
                    }
                }
                
            }

        })
    }else{
        //find if element is already present
        const count=Action.type===ADD_ITEM?1:0;
        preState.cart=[...preState.cart,{...Action.data,productCount:count}]
    };
     
   return [...preState.cart];
   

}
 

export default function GlobalState({children}){
  const [state, dispatch] = React.useReducer(reducer, initialState);


 function addItem(){

   // addItemToCart((pre)=>[...pre,Math.random()])

}
return(
    <State.Provider
    value={
     {
         cart:state.cart,
         addItemToCart:dispatch,
         ADD_ITEM:ADD_ITEM,
         REMOVE_ITEM:REMOVE_ITEM
     }
    }
    >
   {children} 
    </State.Provider>
)

}