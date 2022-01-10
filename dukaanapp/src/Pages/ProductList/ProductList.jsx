import React from 'react';
import PropTypes from 'prop-types';
import {data} from '../../jsonData';
import ProductItem from '../../Component/ProductItem/ProductItem';
import { useLocation } from 'react-router';

const ProductList = () => {
     const {category_id} =useLocation().state;
     console.log("state",useLocation().state);
      const prductArray=data.filter((product)=>product.category_id===category_id)
     console.log("product", prductArray);
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
         {
             prductArray[0].products.map((product)=>{
                 return <ProductItem product={product}/>
             })
         }
        </div>
    );
};

ProductList.propTypes = {
    
};

export default ProductList;