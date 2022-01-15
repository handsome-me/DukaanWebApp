import React ,{useContext} from 'react'
import styles from './styles.module.css';
import { State } from '../../Context/GlobalState';
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
import Counter from '../Counter/Counter';
import { products } from '../../jsonCategory';
const ADD_BTN="ADD_BTN";
const PRODUCT_CLICK="PRODUCT_CLICK";
const REMOVE_ITEM="REMOVE_ITEM";

const ProductItem =({product,category_id}) => {

    const {addItemToCart, ADD_ITEM,REMOVE_ITEM}=useContext(State);
    const navigate=useNavigate();
   // const category_id=product.category_id;
    
    function onClickEvent(event,btnType ,productCount){
      console.log("category_id","#121",category_id);
        event.preventDefault();

        if(btnType===ADD_BTN){
            addItemToCart({type:ADD_ITEM, data:{id:product.id,category_id:product.category_id?product.category_id:category_id ,productCount} });
            return;
            }
            if(btnType===REMOVE_ITEM){
                addItemToCart({type:REMOVE_ITEM, data:{id:product.id,category_id:category_id,productCount} });
                return;
                }

         
         
        const clickId=event.target.id;
      
    
            console.log("prodct",console.log("event",event));
            navigate('/product',{state:product}); 
        
        
    }
    return (
        <div className={styles.productCard}  >
        <div className={styles.productImage} id={PRODUCT_CLICK} onClick={onClickEvent}>
            <img src={product.image}></img>
        </div>  
        <div className={styles.productDetail}>
           <div className={styles.productName} id={PRODUCT_CLICK} onClick={onClickEvent}>{product.name}</div>
            <small>{product.base_qty}</small>
         <div className={styles.productPrice}>
             <div className={styles.price}>
            <div >{product.original_cost}</div>
            </div>
            <Counter onClickEvent={onClickEvent}></Counter>
         {undefined?(<div className={styles.AddProduct}><button id={ADD_BTN}>Add +</button></div>):(<></>)}
         </div>
         </div>
      </div>
    );
};

ProductItem.propTypes = {
    
};

export default ProductItem;