import React, { useState } from "react";
import { FaUser, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './FlightBookingForm.css';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    from: "Ha Noi",
    to: "Ha Noi",
    tripType: "oneWay",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
          <h2 className="h5 mb-0">Form đặt vé máy bay</h2>
          <FaTimes className="text-danger cursor-pointer" />
        </div>

        <form onSubmit={handleSubmit} className="mt-3">
          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label">Họ tên</label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Họ tên..."
                required
              />
              <span className="input-group-text">VND</span>
            </div>
            <div className="form-text">Phải nhập 5 ký tự, in hoa...</div>
          </div>

          {/* Address Input */}
          <div className="mb-3">
            <label className="form-label">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              placeholder="Nhập địa chỉ..."
              required
            />
            <div className="form-text">Phải nhập 5 ký tự, in hoa...</div>
          </div>

          {/* Select Inputs */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Đi từ</label>
              <select
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Ha Noi">Hà Nội</option>
                <option value="Ho Chi Minh">Hồ Chí Minh</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Đến</label>
              <select
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Ha Noi">Hà Nội</option>
                <option value="Ho Chi Minh">Hồ Chí Minh</option>
              </select>
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="mb-3">
            <label className="form-label">Chọn chiều đi (Khứ hồi)</label>
            <div className="form-check">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={formData.tripType === "oneWay"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Đi</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={formData.tripType === "roundTrip"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Về</label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Đặt vé
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
