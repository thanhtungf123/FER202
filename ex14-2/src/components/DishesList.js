import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const DishesList = ({ dishes, searchQuery }) => {
  const { addToCart } = useContext(CartContext);

  // Lọc món ăn theo tên hoặc mô tả dựa trên từ khóa tìm kiếm
  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
    <h2>🍕Danh sách món ăn</h2>
    <Row className="dishes">
      {filteredDishes.length > 0 ? (
        filteredDishes.map((dish) => (
          <Col key={dish.id} md={2} className="mb-4">
            <Card className="dish-item">
              <Card.Img variant="top" src={dish.image} alt={dish.name} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Card.Text>{`Giá: $${parseFloat(dish.price).toFixed(2)}`}</Card.Text>
                <Button variant="success" onClick={() => addToCart(dish)}>Thêm vào giỏ</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="not-found">❌ Không tìm thấy món ăn phù hợp.</p>
      )}
    </Row>
  </Container>
  );
};

// Prop validation để đảm bảo đúng kiểu dữ liệu
DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default DishesList;
