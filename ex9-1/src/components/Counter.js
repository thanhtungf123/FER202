import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4 text-center shadow-lg border rounded" style={{ width: "300px" }}>
        <h2 className="fw-bold mb-3">Counter App</h2>
        <p className="display-4 fw-semibold">{count}</p>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="danger" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default CounterApp;
