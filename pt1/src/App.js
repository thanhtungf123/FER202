import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Students from "./components/Students";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Students />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
