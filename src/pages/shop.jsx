import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ProductList} from '../components/ProductList';

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className='container'>
      <h1 className='text-center py-10 text-[32px]'>Shop</h1>
      <ProductList products={products} /> 
    </div>
  );
};
