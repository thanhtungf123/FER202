import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { ListGroup, Button, Image, Container, Row, Col } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue } = useContext(CartContext);

  return (
    <Container className="cart-container">
      <h2>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex align-items-center">
              <Image src={item.image} alt={item.name} width={50} height={50} rounded className="cart-item-img me-3" />
              <div className="flex-grow-1">
                <span>{item.name} - ${parseFloat(item.price).toFixed(2)}</span>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>❌</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {cartItems.length > 0 && (
        <>
          <p className="mt-3">{`Tổng số món: ${cartItems.length}`}</p>
          <p>{`Tổng giá trị: $${totalValue}`}</p>
          <Button className="clear-cart-btn" variant="warning" onClick={clearCart}>🧹 Xóa toàn bộ giỏ hàng</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
