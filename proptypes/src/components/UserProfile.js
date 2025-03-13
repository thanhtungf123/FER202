import React from "react";
import PropTypes from "prop-types";
import { Card, Alert, Container } from "react-bootstrap";

// Component UserProfile
const UserProfile = ({ name, age }) => {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-primary">Thông Tin Người Dùng</Card.Title>

          {/* Kiểm tra lỗi về tên */}
          {!name || typeof name !== "string" ? (
            <Alert variant="danger">Tên không hợp lệ hoặc không được cung cấp!</Alert>
          ) : (
            <Card.Text><strong>Tên:</strong> {name}</Card.Text>
          )}

          {/* Kiểm tra lỗi về tuổi */}
          {!age ? (
            <Alert variant="danger">Tuổi không được để trống!</Alert>
          ) : isNaN(age) ? (
            <Alert variant="danger">Tuổi phải là một số hợp lệ!</Alert>
          ) : (
            <Card.Text><strong>Tuổi:</strong> {age}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

// Xác định PropTypes cho UserProfile
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // 'name' phải là một chuỗi và là bắt buộc
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 'age' có thể là chuỗi hoặc số và là bắt buộc
};

export default UserProfile;
