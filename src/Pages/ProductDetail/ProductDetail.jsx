import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../../Component/Header/Header'

const ProductDetail = (props) => {
   const {state}=useLocation();
  
   const {name,image,base_cost} =state;
   console.log(name, image);
    // const name=productDetail.name;
    // const image=productDetail.image;
    // const base_cost=productDetail.base_cost;
      
    return (
        <div>
            <Header/>
            <div className={styles.container}>
            <div className={styles.productImage}>
            <img src={image} />
            </div>
           <div className={styles.detail}>
            <h3 className={styles.productName}>{name}</h3>
          <div><h2>Base Cost</h2>
         <h2>{base_cost}</h2>
         </div>
         </div>
         </div>
        </div>
    );
};

ProductDetail.propTypes = {
    
};

export default ProductDetail;