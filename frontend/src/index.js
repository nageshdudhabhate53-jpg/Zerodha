import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import HomePage from './landing_Page/Home/HomePage';
import Signup from './landing_Page/Signup/Signup';
import About from './landing_Page/About/AboutPage';
import ProductPage from './landing_Page/Products/ProductPage';
import PricingPage from './landing_Page/Pricing/PricingPage';
import Support from './landing_Page/Support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='*' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/ProductPage' element={<ProductPage/>}/>
    <Route path='/PricingPage' element={<PricingPage/>}/>
    <Route path='/Support' element={<Support/>}/>
</Routes>
<Footer/>
</BrowserRouter>
);


