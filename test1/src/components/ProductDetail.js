import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components

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
    <Container className="my-4">
      <h2 className="text-center mb-4">{product.name}</h2>
      <Row>
        <Col md={6}>
          <Card.Img variant="top" src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <h4>Price: {product.price}</h4>
              <h5>Stock: {product.stock}</h5>
              <Button variant="primary" onClick={() => navigate('/products')}>
                Back to Product List
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
