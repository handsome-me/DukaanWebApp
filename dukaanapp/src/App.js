import logo from './logo.svg';
import './App.css';
import React from 'react'
 
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';

function App({children}) {

    return(
        <>
      <div className="App">
        {children}
        </div>
        <Footer></Footer>
        </>
    )
 
}

const css={
    whiteSpace:"nowrap",
    overflow:"scroll hidden",
    maxWidth:"100%",
    display:"flex",
   
    paddingBottom: "1rem",
}

export default App;


