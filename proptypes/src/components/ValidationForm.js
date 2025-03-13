import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "nam",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Kiểm tra tên
    if (!formData.name) {
      newErrors.name = "Tên không được để trống!";
    } else if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải từ 3 đến 50 ký tự!";
    }

    // Kiểm tra tuổi
    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

    // Kiểm tra email
    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    // Kiểm tra số điện thoại
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }

    // Kiểm tra checkbox điều khoản
    if (!formData.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container className="mt-4">
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra các trường nhập!
        </Alert>
      )}

      <h3 className="mb-3 text-primary">Tạo Form với PropTypes</h3>
      <Form onSubmit={handleSubmit}>
        {/* Tên */}
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        {/* Tuổi */}
        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        {/* Số điện thoại */}
        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        {/* Giới tính */}
        <Form.Group controlId="formGender">
          <Form.Label>Giới tính</Form.Label>
          <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </Form.Control>
        </Form.Group>

        {/* Đồng ý điều khoản */}
        <Form.Group controlId="formAgree">
          <Form.Check
            type="checkbox"
            label="Đồng ý với điều khoản"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
          />
          <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>
        </Form.Group>

        {/* Nút Submit */}
        <Button className="mt-3 w-100" variant="primary" type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ValidationForm;
