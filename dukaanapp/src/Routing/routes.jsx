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
import ProductList from '../Pages/ProductList/ProductList';
import Cartitem from '../Pages/CartItem/Cartitem';


const Navigation = props => {
    return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App><Home/></App>}/>
    <Route path="/product" element={<App><ProductDetail/></App>}/>
    <Route path="/productList" element={<App><ProductList/></App>}/>
    <Route path="/mycart" element={<App><Cartitem/></App>}/>
    <Route path='*' exact={true} element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    );
};
 
export default Navigation;