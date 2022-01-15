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
        let updatedCart;
       
        const  isPresent=preState.cart.find((item)=>item.id===Action.data.id);
         
        if(isPresent){
            preState.cart.forEach((item)=>{
            console.log("item",item)
                if(item.id===Action.data.id){
                    item.productCount++;
                }

            })
        }else{
            //find if element is already present
            preState.cart=[...preState.cart,{...Action.data,productCount:1}]
        }
         
        return{
            ...preState,
            cart:[...preState.cart]

        }

    }

        case REMOVE_ITEM:{
            const updateStateCart=filterIdFromState(Action.data,preState)
            console.log("updateCart",updateStateCart);
            return {
                ...preState,
                cart:updateStateCart
            }
    
        }

     }
    }catch(error){
      console.log("error message->", error.message);
    }

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