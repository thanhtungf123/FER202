import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from './components/StudentCard';

function App() {
  const userData = { name: "Phan Thanh Tung", age: 21 };
  const namesList = ["tungptde170779@fpt.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "Nguyen Van A", age: 20, avatar: "/images/student1.JPG" },
    { name: "Nguyen Van B", age: 21, avatar: "/images/student2.JPG" },
    { name: "Nguyen Van C", age: 18, avatar: "/images/student3.JPG" },
  ];

  return (
    <>
      <Welcome name="Phan Thanh Tung" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}

export default App;
