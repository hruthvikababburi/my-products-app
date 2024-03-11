import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Fake Store Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.image} alt={product.title} />
              <h3 className='product-name'>{product.title}</h3>
              <p className='product-price'>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
