import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { State } from '../../Context/GlobalState';
import {data as products} from '../../jsonData';
 
const Cartitem = props => {
    const {cart,addItemToCart, ADD_ITEM,REMOVE_ITEM}=useContext(State);
    
     console.log("cart",cart);
     if(Array.isArray(cart)){
         var allCartItem=cart.map(({category_id,id})=>{
            const filterdProduct=products.filter((product)=>product.category_id==category_id); 
            console.log('fil',filterdProduct);
            if(filterdProduct){
                return filterdProduct[0].products.find((pro)=>pro.id==id);
            }
           
         })
     }
     console.log("allCartItems",allCartItem);

    return (
        <div>
         {
           cart.length>0?(allCartItem.map((item)=>{
               return (<div style={{display:"flex"}}>
               <img src={item.image} style={{width:"160px", height:'160px'}}/>
               <div style={{display:"flex",flexDirection:"column"}}>
                 <h2>SOme randome content is over herer and which can break the data</h2>
                 <small>22</small>
                 <h2>COunter <button></button></h2>
               </div>
           </div>)
           })):(<div><h2>No Order Found</h2></div>)
         }
        </div>
    );
};

// Cartitem.propTypes = {
    
// };

export default Cartitem;