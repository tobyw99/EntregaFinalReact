import React, { useEffect, useState } from 'react';

const Cart = ({ setCartCount }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartCount(prevCount => prevCount - 1);
  };

  const generateTicket = () => {
    const ticket = cart.map(item => `${item.title} - $${item.price}`).join('\n');
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    alert(`Tu ticket de compra:\n\n${ticket}\n\nTotal: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div className='container-cart'>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li className='item-cart' key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className='item-price'>
              <button onClick={() => removeFromCart(index)}>Remove</button>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className='btn btn-secondary ticket' onClick={generateTicket}>BUY</button>
    </div>
  );
};

export default Cart;
