'use client';
import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  category: string;
};
export default function Product() {
  const [product, setProduct] = useState<Product | null>();

  const getproductData = async () => {
    const res = await fetch('https://dummyjson.com/products/3');
    const data = (await res.json()) as Product;
    setProduct(data);
  };

  const clearData = async () => {
    setProduct(null);
  };

  return (
    <div>
      <button onClick={getproductData}>Fetch product details</button>
      <div>
        <button onClick={clearData}>Clear</button>
      </div>
      <span>
        <ul>
          <li>Product ID is : {product?.id}</li>
          <li>Product category is : {product?.category}</li>
          <li>Product title is : {product?.title}</li>
        </ul>
      </span>
    </div>
  );
}
