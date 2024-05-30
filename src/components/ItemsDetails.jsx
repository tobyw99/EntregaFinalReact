import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ setCartCount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(jsonData => {
        setProduct(jsonData);
      });
  }, [id]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
    setCartCount(prevCount => prevCount + 1); // Actualiza el contador del carrito en el Navbar
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div className='product-accions'>
        <h3>${product.price}</h3>
        <button className='btn btn-primary' onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
