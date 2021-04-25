import React from "react";
import header from "./header.svg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>
              <i className="fas fa-car"></i> RentCar
            </b>
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Головна
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Автопарк
                </a>
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
                  <a className="nav-link" href="#">
                    Вхід
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Реєстація
                  </a>
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
