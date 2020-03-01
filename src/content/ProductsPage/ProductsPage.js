import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch('http://localhost:3333/products');
    const data = await response.json();

    setProducts(data);
  }, []);

  return (
    <div>
      <div>Products Page</div>
      <ul>
        {products.map(prod => (<li key={prod.id}>{prod.name}</li>))}
      </ul>
    </div>
  );
}