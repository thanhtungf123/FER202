import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import StudentCard from "./StudentCard";
import Footer from "./Footer";
import "./styles.css";

const students = [
  {
    id: "DE170167",
    name: "Nguyễn Hữu Quốc Đoàn",
    campus: "Đà Nẵng",
    image: "student1.jpg",
  },
  {
    id: "DE180177",
    name: "Châu Văn Thiết",
    campus: "Quảng Nam",
    image: "student2.jpg",
  },
  {
    id: "DE150167",
    name: "Đỗ Nguyên Phúc",
    campus: "Quảng Nam",
    image: "student3.jpg",
  },
  {
    id: "DE170169",
    name: "Lê Hoàng Minh",
    campus: "Đà Nẵng",
    image: "student4.jpg",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Students Detail</h2>
        <div className="row justify-content-center">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
