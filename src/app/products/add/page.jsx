"use client"

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products/add');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    // Logic for adding a product can go here.
    // You can either show a form or handle it directly.
    alert("Add product button clicked!");
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold">Products</h2>
      
      {/* Add Product Button */}
      <button 
        onClick={handleAddProduct} 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Add Product
      </button>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="border p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
