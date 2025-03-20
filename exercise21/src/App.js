import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import UserList from './components/UserList';
import DishList from './components/DishList';
import UserDetail from './components/UserDetail';
import DishDetail from './components/DishDetail';
import UserData from './data/UserData';
import DishData from './data/DishData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function App() {
  const users = UserData();
  const dishes = DishData();

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        
        <Container>
          <Row className="my-4">
            {/* Hiển thị danh sách người dùng */}
            <Col>
              <h2>Users</h2>
              <UserList users={users} />  {/* Truyền dữ liệu người dùng vào UserList */}
            </Col>
          </Row>

          <Row className="my-4">
            {/* Hiển thị danh sách món ăn */}
            <Col>
              <h2>Dishes</h2>
              <DishList dishes={dishes} />
            </Col>
          </Row>
        </Container>

        <Routes>
          {/* Routes cho User và Dish */}
          <Route path="/user/:userId" element={<UserDetail users={users} />} />
          <Route path="/dish/:dishId" element={<DishDetail dishes={dishes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
