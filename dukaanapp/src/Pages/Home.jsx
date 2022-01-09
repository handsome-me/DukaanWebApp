import React from 'react'
import {data} from '../jsonData'
import Categories from '../Component/Categories/Categories.jsx'
import Header from '../Component/Header/Header'
import Space from '../Component/Space/Space';
import Product from '../Component/Product/Product';
import Cart from '../Component/Cart/Cart'

const Home = props => {
    return (
        <div className="App">
        <Header/>
        <Space/>
        <h1 style={{textAlign:"start"}}>Top Categories</h1>
          <div className="parent" style={css}>
            {data.map((item)=>{
              return <Categories title={item.category_name} category_id={item.category_id}/>
            })}
          </div>
         <div>
         {
       
           data.map((product)=>{
             return <Product product={product}></Product>
           })
          
         }
         </div>
         <Cart></Cart>
    
      </div>
    ); 
};


const css={
    whiteSpace:"nowrap",
    overflow:"scroll hidden",
    maxWidth:"100%",
    display:"flex",
   
    paddingBottom: "1rem",
}
Home.propTypes = {
    
};

export default Home;