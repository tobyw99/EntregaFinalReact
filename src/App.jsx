import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Products from './components/ItemsListDetails';
import ProductDetail from './components/ItemsDetails';
import Cart from './components/Cart';

function App() {
  const [cartCount, setCartCount] = useState(0); // Define setCartCount aquí
  return (
    <Router>
      <div className='container-app'>
        <CustomNavbar setCartCount={setCartCount} /> {/* Pasa setCartCount aquí */}
        <Routes>
          <Route path="/products" element={<Products setCartCount={setCartCount} />} /> {/* Pasa setCartCount aquí */}
          <Route path="/products/:id" element={<ProductDetail setCartCount={setCartCount}/>} />
          <Route path="/cart" element={<Cart setCartCount={setCartCount}/>} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

