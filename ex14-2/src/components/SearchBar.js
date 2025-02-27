import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, InputGroup, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Delay tìm kiếm để tránh gọi onSearch quá nhiều lần khi nhập nhanh
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(searchQuery);
    }, 300); // Chờ 300ms sau khi người dùng nhập

    return () => clearTimeout(delaySearch);
  }, [searchQuery, onSearch]);

  return (
    <Container className="search-container">
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <Search /> {/* Biểu tượng tìm kiếm */}
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="🔍Tìm kiếm món ăn..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </InputGroup>
    </Container>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
