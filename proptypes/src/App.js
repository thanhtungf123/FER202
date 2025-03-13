import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const handleFormSubmit = (formData) => console.log("Dữ liệu gửi:", formData);

  return (
    <Container className="p-4">
      <Card className="shadow-sm p-3 mb-4 text-center">
        <h1 className="text-success">Ứng Dụng React</h1>
      </Card>

      <Row>
        <Col md={6}>
          <h4 className="text-primary">UserProfile - Thông Tin Người Dùng</h4>

          <UserProfile name="Nguyễn Văn A" age={25} />
          <UserProfile name="" age={25} />
          <UserProfile name="Nguyễn Văn B" age="twenty five" />
          <UserProfile name="Nguyễn Văn C" age={null} />
        </Col>

        <Col md={6}>
          <h4 className="text-primary">UserProfile2 - Form Nhập Thông Tin</h4>

          <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
          <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleFormSubmit} />
          <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
        </Col>
      </Row>

      <hr />

      <Card className="shadow-sm p-3 mt-4">
        <h4 className="text-primary text-center">MyForm - Đăng Ký Người Dùng</h4>
        <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      </Card>

      <hr />

      <h1 className="text-center text-success mb-4"></h1>
      <ValidationForm onSubmit={handleFormSubmit} />
    </Container>

  );
};

export default App;
