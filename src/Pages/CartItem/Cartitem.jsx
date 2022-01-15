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
        <div style={{display:"flex", flexDirection:"column"}}>
        <div>
                <h2>Checkout</h2>
            </div>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flex:"1", flexDirection:"column"}}>  
         {
           cart.length>0?(allCartItem.map((item)=>{
               return (<div style={{display:"flex"}}>
               <img src={item.image} style={{width:"160px", height:"160px"}}/>
               <div style={{display:"flex",flexDirection:"column",marginLeft:'10px'}}>
                 <p style={{margin:0}}>SOme randome content is over herer and which can break the data</p>
                 <small>22</small>
                 <h3>Counter <button></button></h3>
               </div>
              </div>
           )
           })):(<div><h2>No Order Found</h2></div>)
         }
         </div>
         <div style={{backgroundColor:"#f2f2f2",marginLeft:"30px",height:"fit-content",width:"300px",display:"flex",flexDirection:"column", padding:"5px"}}>
             <div style={sty}>
                 <p>item Total</p>
                 <p>22</p>
             </div>
             <div style={sty}>
                 <p>Delivery</p>
                 <p>23</p>
             </div>
             <div style={sty}>
                 <h2>GrandTotal</h2>
                 <h2>2000</h2>
             </div>
         </div>
       </div>
        </div>
    );
};
const sty={
    display:"flex",
    justifyContent:"space-between"
}

// Cartitem.propTypes = {
    
// };

export default Cartitem;