import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

// Component UserProfile2
const UserProfile2 = ({ name, age, onSubmit }) => {
  const [formData, setFormData] = useState({ name, age });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Kiểm tra dữ liệu trước khi submit
  const validateForm = () => {
    const newErrors = {};
    const age = parseInt(formData.age, 10);

    if (!formData.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải từ 3 đến 50 ký tự!";
    }

    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-primary">Thông Tin Người Dùng</Card.Title>

          {/* Hiển thị thông báo lỗi nếu có */}
          {showAlert && (
            <Alert variant="danger">
              <strong>Lỗi:</strong> Vui lòng kiểm tra các trường nhập!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            {/* Trường nhập tên */}
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Nhập tên của bạn"
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            {/* Trường nhập tuổi */}
            <Form.Group controlId="formAge">
              <Form.Label>Tuổi</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
                placeholder="Nhập tuổi của bạn"
              />
              <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
            </Form.Group>

            {/* Nút gửi */}
            <Button className="mt-3 w-100" variant="primary" type="submit">
              Gửi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

// Xác định PropTypes cho UserProfile2
UserProfile2.propTypes = {
  name: PropTypes.string.isRequired, // 'name' là chuỗi bắt buộc
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 'age' có thể là chuỗi hoặc số
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit để xử lý khi người dùng submit form
};

export default UserProfile2;
