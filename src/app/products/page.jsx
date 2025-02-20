"use client"

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Update this import path for Swiper styles

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-6">
      {/* Carousel Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {/* Example of SwiperSlide */}
          {products.slice(0, 3).map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={product.image} // Assuming product.image holds the URL
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-sm text-white">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Products Cards Section */}
      <h2 className="text-3xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image} // Assuming product.image holds the URL
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold text-green-500">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
