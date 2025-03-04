import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Dropdown } from "react-bootstrap";


// Reducer để xử lý các hành động thêm, xóa và chỉnh sửa item
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
        editingItemId: null, // Reset ID của item đang chỉnh sửa sau khi lưu
        editName: "",
      };
    case "SET_EDIT_NAME":
      return { ...state, editName: action.value };
    case "SET_EDIT_ITEM_ID":
      return { ...state, editingItemId: action.id, editName: action.name };
    case "SORT_ITEMS":
      return {
        ...state,
        items: action.sortType === "name"
          ? [...state.items].sort((a, b) => a.name.localeCompare(b.name))
          : [...state.items].sort((a, b) => a.id - b.id),
      };
    case "FILTER_ITEMS":
      return {
        ...state,
        filteredItems: state.items.filter((item) =>
          item.name.toLowerCase().includes(action.query.toLowerCase())
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  filteredItems: [],
  editingItemId: null, // Lưu ID của item đang chỉnh sửa
  editName: "", // Lưu tên item đang chỉnh sửa
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, name) => {
    dispatch({ type: "SET_EDIT_ITEM_ID", id, name });
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, newName: state.editName });
  };

  const handleSortItems = (sortType) => {
    dispatch({ type: "SORT_ITEMS", sortType });
  };

  const handleFilterItems = (e) => {
    setSearchQuery(e.target.value);
    dispatch({ type: "FILTER_ITEMS", query: e.target.value });
  };

  const itemsToDisplay = searchQuery ? state.filteredItems : state.items;

  return (
    <Container className="mt-4">
        <h1>Item</h1>
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem}>
              Add Item
            </Button>
          </Form>

          {/* Chức năng tìm kiếm */}
          <Form.Group className="mt-3">
            <Form.Label>Search Items:</Form.Label>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleFilterItems}
              placeholder="Search by name"
            />
          </Form.Group>

          {/* Chức năng sắp xếp */}
          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="success" id="dropdown-sort">
              Sort Items
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortItems("name")}>
                Sort by Name
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortItems("time")}>
                Sort by Created Time
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            {itemsToDisplay.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between"
              >
                {state.editingItemId === item.id ? (
                  // Nếu đang ở chế độ chỉnh sửa, hiển thị input cho item
                  <Form.Control
                    type="text"
                    value={state.editName}
                    onChange={(e) => dispatch({ type: "SET_EDIT_NAME", value: e.target.value })}
                  />
                ) : (
                  item.name
                )}
                <div>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.id)}
                    className="mx-2"
                  >
                    Remove
                  </Button>
                  {state.editingItemId === item.id ? (
                    <Button
                      variant="success"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      onClick={() => handleEditItem(item.id, item.name)}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
