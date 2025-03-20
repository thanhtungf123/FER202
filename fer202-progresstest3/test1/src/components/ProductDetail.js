import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);  // Initialize state to store product data
  const navigate = useNavigate();

  // Fetch the product data based on the product ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with ID:", id);  // Debugging log to check the ID
        const response = await axios.get(`http://localhost:5000/Products/${id}`);
        console.log("Product data fetched:", response.data);  // Log the fetched data
        setProduct(response.data);  // Store the product data in state
      } catch (err) {
        console.error('Error fetching product:', err);
        setProduct(null);  // Set product to null if error occurs
      }
    };

    fetchProduct();
  }, [id]);  // Trigger effect when product ID changes

  // Display loading message while data is being fetched or product is not found
  if (product === null) {
    return <div>Loading... or Product Not Found</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Description</h3>
          <p>{product.description}</p>
          <h4>Price: {product.price}</h4>
          <h5>Stock: {product.stock}</h5>
          <button className="btn btn-secondary" onClick={() => navigate('/products')}>
            Back to Product List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
