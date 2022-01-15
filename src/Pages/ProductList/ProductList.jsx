import React from 'react';
import PropTypes from 'prop-types';
import {data} from '../../jsonData';
import ProductItem from '../../Component/ProductItem/ProductItem';
import { useLocation } from 'react-router';

const ProductList = () => {
     const {category_id} =useLocation().state;
     console.log("category_id",category_id);
     const prductArray=data.filter((product)=>product.category_id===category_id)
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
         {
             prductArray[0].products.map((product)=>{
                 product.category_id=category_id;
                 return <div style={{display:"flex", flex:"300px"}}><ProductItem product={product}/></div>
             })
         }
        </div>
    );
};

ProductList.propTypes = {
    
};

export default ProductList;