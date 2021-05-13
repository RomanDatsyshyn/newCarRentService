import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import header from "./header.svg";

const NavBar = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  const clearLocalStorage = (type) => {
    if (type === "user") {
      localStorage.removeItem("access_token");
      setIsUserLogged(false);
    }
    if (type === "admin") {
      localStorage.removeItem("admin_token");
      setIsAdminLogged(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsUserLogged(true);
    }
    if (localStorage.getItem("admin_token")) {
      setIsAdminLogged(true);
    }
  }, []);

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
                <Link to="/cars" className="nav-link">
                  Автопарк
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Ціни
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Умови
                </Link>
              </li>
            </ul>
            <div>
              {isUserLogged && (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      Мій кабінет
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => clearLocalStorage("user")}
                    >
                      Вийти
                    </Link>
                  </li>
                </ul>
              )}

              {isAdminLogged && (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Аналітика
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => clearLocalStorage("admin")}
                    >
                      Вийти
                    </Link>
                  </li>
                </ul>
              )}

              {isAdminLogged === false && isUserLogged === false && (
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
              )}
            </div>
          </div>
        </div>
      </nav>
      <img src={header} className="img-fluid" alt="Header" />
    </>
  );
};

export default NavBar;
