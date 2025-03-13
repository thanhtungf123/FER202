import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const EventHandlingDemo = () => {
  // Khởi tạo state count với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm xử lý sự kiện click để tăng giá trị count
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Container className="text-center mt-4">
      <h2 className="text-xl font-bold">Xử lý sự kiện click chuột</h2>
      <p className="text-lg">Giá trị hiện tại: {count}</p>
      <Button 
        onClick={handleButtonClick} 
        variant="primary"
        className="mt-2"
      >
        Tăng giá trị
      </Button>
    </Container>
  );
};

export default EventHandlingDemo;