import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Product = ({product}) => {
    return (
         <div className={styles.productCard}>
           <div className={styles.productImage}>
               <img src={product.image}></img>
           </div>  
           <div>
              {product.name}
            </div>
         </div>
    );
};

Product.propTypes = {
    
};

export default Product;