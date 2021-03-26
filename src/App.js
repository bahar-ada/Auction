import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import {Form} from './components/Form/Form';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>     
      <Hero/>
      <Products heading='در این بخش جدیدترین حراجها را می بینید' data={productData}/>
      {/* <Form/> */}
      <Footer/>
    </Router>
  );
}

export default App;
