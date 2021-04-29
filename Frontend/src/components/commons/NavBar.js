import React from "react";
import { Link } from "react-router-dom";
import header from "./header.svg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <b>
              <i className="fas fa-car"></i> RentCar
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cars" className="nav-link" href="#">
                  Автопарк
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ціни
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Умови
                </a>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Вхід
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Реєстація
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <img src={header} className="img-fluid" alt="Header" />
    </>
  );
};

export default NavBar;
