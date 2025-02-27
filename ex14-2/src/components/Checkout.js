import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Card, Button, Container } from "react-bootstrap";

const Checkout = () => {
  const { cartItems, clearCart, totalValue } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng trống, vui lòng thêm món ăn trước khi thanh toán.");
      return;
    }
    setIsCheckout(true);
    setTimeout(() => {
      clearCart();
      setIsCheckout(false);
      alert("Thanh toán thành công! Cảm ơn bạn đã đặt hàng.");
    }, 1000);
  };

  return (
    <Container className="checkout-container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Thanh toán</Card.Title>
          {cartItems.length === 0 ? (
            <p>Không có sản phẩm nào trong giỏ hàng.</p>
          ) : (
            <>
              <p>{`Tổng số món: ${cartItems.length}`}</p>
              <p>{`Tổng giá trị: $${totalValue}`}</p>
              <Button variant="primary" onClick={handleCheckout} disabled={isCheckout}>
                {isCheckout ? "Đang xử lý..." : "Xác nhận đơn hàng"}
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Checkout;
