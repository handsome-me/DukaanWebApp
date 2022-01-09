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

const Navigation = props => {
    return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App />}/>
    <Route path="/product" element={<ProductDetail/>}/>
    <Route path='*' exact={true} element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    );
};
 
export default Navigation;