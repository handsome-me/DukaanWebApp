import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ProductItem =({product}) => {
    return (
        <div className={styles.productCard}>
        <div className={styles.productImage}>
            <img src={product.image}></img>
        </div>  
        <div className={styles.productDetail}>
           <div className={styles.productName}>{product.name}</div>
            <small>{product.base_qty}</small>
         <div className={styles.productPrice}>
             <div className={styles.price}>
            <div>{product.original_cost}</div>
            </div>
        <div className={styles.AddProdcut}><button>Add+</button></div>
         </div>
         </div>
      </div>
    );
};

ProductItem.propTypes = {
    
};

export default ProductItem;