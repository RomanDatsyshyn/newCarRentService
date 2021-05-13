import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-3"></div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container d-flex justify-content-between">
          <span className="text-muted">Дипломна робота - Дацишина Романа</span>
          <Link to="/admin-panel">
            <span className="text-muted">Адмін-панель</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
