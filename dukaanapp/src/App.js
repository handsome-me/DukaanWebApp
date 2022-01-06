import logo from './logo.svg';
import './App.css';
import React from 'react'
import {data} from '../src/jsonData.js'
import Categories from './Component/Categories/Categories.jsx'
import Header from './Component/Header/Header'

function App() {


  React.useEffect(()=>{

   console.log('json data ', data)

  },[])

  return (
    <div className="App">
      <Header/>
      <h1 style={{textAlign:"start"}}>Top Categories</h1>
        <div className="parent" style={css}>
          {data.map((item)=>{
            return <Categories title={item.category_name} category_id={item.category_id}/>
          })}
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


