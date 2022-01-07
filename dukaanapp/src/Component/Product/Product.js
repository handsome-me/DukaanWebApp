import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import Space from '../Space/Space';

const Product = ({product}) => {
    return (
         <div>
           <div className={styles.productTitle}>
          <h2>{product.category_name}</h2>
          </div>
          <div className={styles.productContainer}>
              {
              product.products.map((item)=>{
                  return <ProductItem product={item}></ProductItem>
              })
            }
            <Space></Space>
          </div>
          </div>
    );
};

 
export default Product;