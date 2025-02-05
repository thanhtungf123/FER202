import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-5 mb-4">
      <div className="card student-card p-3 text-center">
        <img src={student.image} alt={student.name} className="img-fluid rounded student-img" />
        <h5 className="mt-3">{student.name}</h5>
        <p className="mb-1"><strong>{student.id}</strong></p>
        <p>{student.campus}</p>
        <div className="d-flex justify-content-center">
          <div className="form-check me-3">
            <input className="form-check-input" type="radio" name={`status-${student.id}`} />
            <label className="form-check-label">Absent</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={`status-${student.id}`} />
            <label className="form-check-label">Present</label>
          </div>
        </div>
        <button className="btn btn-warning mt-2">Submit</button>
      </div>
    </div>
  );
};

export default StudentCard;
