import logo from './logo.svg';
import './App.css';
import React from 'react'
import {data} from '../src/jsonData.js'
import {products} from '../src/jsonCategory.js'
import Categories from './Component/Categories/Categories.jsx'
import Header from './Component/Header/Header'
import Space from './Component/Space/Space';
import Product from './Component/Product/Product';

function App() {


  React.useEffect(()=>{

   console.log('json data ', data)

  },[])

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
       <div className={"productContainer"}>
       {
     
         products.map((product)=>{
           return <Product product={product}></Product>
         })
        
       }
       </div>
         

    </div>
  );
}

const css={
    whiteSpace:"nowrap",
    overflow:"scroll hidden",
    maxWidth:"100%",
    display:"flex",
   
    paddingBottom: "1rem",
}

export default App;


