// ItemsListDetails.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const ItemsListDetails = ({ setCartCount }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
      });
  }, []);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
      setCartCount(JSON.parse(cartData).length); // Actualiza el contador del carrito en el Navbar
    }
  }, [setCartCount]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
    setCartCount(cart.length + 1); // Actualiza el contador del carrito en el Navbar
  };

  return (
    <div className='containerList'>
      {data.map((product, index) => (
        <div key={index} className='containerCard'>
          <img src={product.image} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{product.title}</h5>
            <p className='card-text'>{product.description}</p>
            <div className='card-accions'>
              <h3 className='card-price'>${product.price}</h3>
              <button className='btn btn-primary' onClick={() => addToCart(product)}>Add to Cart</button>
              <Link to={`/products/${product.id}`} className='btn btn-secondary'>View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsListDetails;
