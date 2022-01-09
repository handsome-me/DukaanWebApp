import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import App from '../App';
import NotFound from '../Pages/NotFound';
import ProductDetail from '../Pages/ProductDetail/ProductDetail';
import Home from '../Pages/Home';


const Navigation = props => {
    return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App><Home/></App>}/>
    <Route path="/product" element={<App><ProductDetail/></App>}/>
    <Route path='*' exact={true} element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    );
};
 
export default Navigation;