import React ,{useContext} from 'react'
import styles from './styles.module.css';
import { State } from '../../Context/GlobalState';
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"
const ADD_BTN="ADD_BTN";
const PRODUCT_CLICK="PRODUCT_CLICK";

const ProductItem =({product,category_id}) => {
    const {addItemToCart, ADD_ITEM,REMOVE_ITEM}=useContext(State);
    const navigate=useNavigate();
    function onClickEvent(event){
         event.preventDefault();
        const clickId=event.target.id;
        if(clickId===ADD_BTN){
        addItemToCart({type:ADD_ITEM, data:{id:product.id,category_id:category_id} });
        }else{
            console.log("prodct",console.log("event",event));
            navigate('/product',{state:product}); 
        }
        
    }
    return (
        <div className={styles.productCard} id={PRODUCT_CLICK} onClick={onClickEvent}>
        <div className={styles.productImage}>
            <img src={product.image}></img>
        </div>  
        <div className={styles.productDetail} >
           <div className={styles.productName}>{product.name}</div>
            <small>{product.base_qty}</small>
         <div className={styles.productPrice}>
             <div className={styles.price}>
            <div >{product.original_cost}</div>
            </div>
        <div className={styles.AddProduct}><button id={ADD_BTN}>Add +</button></div>
         </div>
         </div>
      </div>
    );
};

ProductItem.propTypes = {
    
};

export default ProductItem;