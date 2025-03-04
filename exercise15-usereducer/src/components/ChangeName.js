import React, { useReducer } from 'react';
import { Container, Form } from 'react-bootstrap'; // Import Bootstrap

// Reducer để xử lý các hành động thay đổi trạng thái
function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: 'SET_AGE', value: e.target.value });
  };

  return (
    <Container className="change-container mt-5">
      <h1 className="change-title">Change Name and Age</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            value={state.age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </Form.Group>
      </Form>

      <div className="result-box">
        <h4>Name: {state.name || "Not entered"}</h4>
        <h4>Age: {state.age || "Not entered"}</h4>
      </div>
    </Container>
  );
}

export default ChangeNameAge;
