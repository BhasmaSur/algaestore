"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetails = ({ product }) => {
    const router = useRouter();
    // const { product_id } = router.query; // Access the product ID from the URL
  
    // const [product, setProduct] = useState(null);


    demoProduct = {
        "name": "Seaweed Snack",
        "brand": "Ocean Delights",
        "description": "A delicious and nutritious seaweed snack with a hint of sea salt.",
        "price": 4.99,
        "weight": "50g",
        "ingredients": ["Organic Seaweed", "Sunflower Oil", "Sea Salt"],
        "image_url": "https://www.salamat.gr/image/cache/catalog/GEORGINA%20ESHOP/04-03-22/EE11002-1080x1080.png",
        "product_id": '121'
      }
  
    // useEffect(() => {
    //   // Fetch product details based on the product ID
    //   // Replace this with your actual data fetching logic
    //   // Example: fetchProductDetails(id).then(data => setProduct(data));
    //   setProduct(demoProduct)
    // }, [product_id]);
  
    // if (!product) {
    //   return <p>Loading...</p>;
    // }
  
    return (
      <div>
        <h1>Product Details</h1>
        <p>Product ID: {product_id}</p>
        <p>Product Name: {product.name}</p>
        {/* Render other product details */}
      </div>
    );
  };
  
  export default ProductDetails;







