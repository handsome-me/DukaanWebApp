import React ,{useContext} from 'react'
import styles from './styles.module.css';
import { State } from '../../Context/GlobalState';
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"


const ProductItem =({product}) => {
    const {addItemToCart}=useContext(State);
    const navigate=useNavigate();
    

    function onClickProduct(){
        console.log("prodct",product);
        navigate('/product',{state:product});

    }
    return (
        <div className={styles.productCard} onClick={onClickProduct}>
        <div className={styles.productImage}>
            <img src={product.image}></img>
        </div>  
        <div className={styles.productDetail}>
           <div className={styles.productName}>{product.name}</div>
            <small>{product.base_qty}</small>
         <div className={styles.productPrice}>
             <div className={styles.price}>
            <div >{product.original_cost}</div>
            </div>
        <div className={styles.AddProduct}><button onClick={()=>{
            addItemToCart((pre)=>[...pre,Math.random()]);
        }}>Add +</button></div>
         </div>
         </div>
      </div>
    );
};

ProductItem.propTypes = {
    
};

export default ProductItem;