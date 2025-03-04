import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap"; // Import các component từ react-bootstrap

// Định nghĩa hàm reducer để xử lý các hành động
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // Sử dụng useReducer để quản lý trạng thái count
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="counter-container">
      <h1 className="counter-title">Counter: {state.count}</h1>
      <div className="counter-buttons">
        <Button variant="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
          +
        </Button>
        <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>
          -
        </Button>
      </div>
      <Button className="reset-button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </Button>
    </Container>
  );
}

export default Counter;
