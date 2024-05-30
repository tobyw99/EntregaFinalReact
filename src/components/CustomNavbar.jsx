// CustomNavbar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const CustomNavbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const cartItems = JSON.parse(cartData);
      setCartCount(cartItems.length);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart {cartCount > 0 && <span className="badge bg-secondary">{cartCount}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
