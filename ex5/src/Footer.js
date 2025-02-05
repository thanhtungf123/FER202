import React from "react";
import { FaPhone, FaFax, FaEnvelope, FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelopeOpen } from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer bg-orange text-black py-4">
      <div className="container">
        <div className="row">
          {/* Cột địa chỉ */}
          <div className="col-md-6">
            <h5><strong>Our Address</strong></h5>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p><FaPhone /> +84023111111</p>
            <p><FaFax /> +852 8765 4321</p>
            <p><FaEnvelope /> <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a></p>
          </div>

          {/* Cột mạng xã hội */}
          <div className="col-md-6 text-md-end text-center mt-3 mt-md-0">
            <FaGoogle className="social-icon mx-2" />
            <FaFacebookF className="social-icon mx-2" />
            <FaLinkedinIn className="social-icon mx-2" />
            <FaTwitter className="social-icon mx-2" />
            <FaYoutube className="social-icon mx-2" />
            <FaEnvelopeOpen className="social-icon mx-2" />
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="text-center mt-3">
          <p>© Copyright 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
