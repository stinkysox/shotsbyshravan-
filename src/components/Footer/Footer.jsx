import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <img
            src="https://i.postimg.cc/QC17wH0Y/logo.jpg"
            alt="Photography Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">Captures the Beauty of life</p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/shotsbyshravan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/919985958625"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} shotsbyshravan . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
