import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './Components/ProductsPage';
import ProductDetailsPage from './Components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<ProductsPage/>} />
          <Route path="/product/:id" element={<ProductDetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


