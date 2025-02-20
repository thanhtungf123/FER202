import React, { useState } from 'react';
import {Form, ListGroup, Container} from 'react-bootstrap';

const SearchFilter = () => {
  const items = ['Yamaha','Taylor','Takamine','Fernandes','Saga','Ibanez', 'Fender','Gibson'];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    
    const newFilteredItems = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(newFilteredItems);
  };

  return (
    <div>
        <Container>
    <Form.Control
      type="text"
      placeholder="Search items..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="mb-3"
    />
    <ListGroup>
      {filteredItems.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
    </Container>
  </div>
  );
};

export default SearchFilter;
