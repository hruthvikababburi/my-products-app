import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2 className='product-heading'>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <div className='product-content'>
        <p className='description'>{product.description}</p>
        <p className='price'>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
