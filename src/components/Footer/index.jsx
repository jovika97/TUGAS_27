import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img
            src="/public/logo kp.jpg"
            alt="Footer Logo"
            className="footer-logo"
          />
          <p>&copy; 2025 Kampung Kerupuk</p>
        </div>

        <div className="footer-info">
          <div className="footer-contact">
            <h4>Kontak</h4>
            <p>Email: info@kampungkerupuk.com</p>
            <p>Telepon: +62 8xx xxx xxx</p>
            <p>Alamat: Jl. Ais Nasution, Kuala Pembuang, Kec.Seruyan Hilir</p>
          </div>

          <div className="footer-social">
            <h4>Ikuti Kami</h4>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/fb.png" alt="Facebook" className="social-logo"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/insta.png" alt="Instagram" className="social-logo"/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/x.png" alt="Twitter" className="social-logo"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
