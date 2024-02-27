import React from 'react';
import { Product } from './product';

export const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

