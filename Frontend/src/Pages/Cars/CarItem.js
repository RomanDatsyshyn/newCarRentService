import React from "react";
import { Link } from "react-router-dom";

import CommonDataService from "../../API//Common.service";

const CarItem = ({ i, retrieveCars }) => {
  const sendRequest = (id) => {
    CommonDataService.deleteCar(id)
      .then((res) => {
        const { data, status } = res;

        if (status === 204) {
          retrieveCars();
        } else {
          alert(data.errors);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="col">
      <div className="card">
        <img
          src={`http://localhost:3001/${i.carImage}`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <hr />
          <div className="container">
            <div className="row align-items-start">
              <div className="col fw-bold">
                1-2 <br />
                Доби
              </div>
              <div className="col fw-bold">
                3-7 <br />
                Діб
              </div>
              <div className="col fw-bold">
                8-30 <br />
                Діб
              </div>
              <div className="col fw-bold">
                31-60 <br />
                Діб
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row align-items-start">
              <div className="col">{i.price}$</div>
              <div className="col">{Math.ceil(i.price - i.price * 0.05)}$</div>
              <div className="col">{Math.ceil(i.price - i.price * 0.1)}$</div>
              <div className="col">{Math.ceil(i.price - i.price * 0.15)}$</div>
            </div>
          </div>
          <hr />
          <p className="card-text fw-light mt-3">
            {localStorage.getItem("admin_token") && (
              <>
                <Link to={`/car/${i.id}/edit/carPrice`}>(змінити ціну)</Link>
                <br />
              </>
            )}
            {i.segment === 0 && "Економ"}
            {i.segment === 1 && "Стандарт"}
            {i.segment === 2 && "Комфорт"}
            {i.segment === 3 && "Бізнес"}
            {i.segment === 4 && "Преміум"}
            {localStorage.getItem("admin_token") && (
              <Link to={`/car/${i.id}/edit/carSegment`}>(змінити)</Link>
            )}
            <br />
            {i.town === 0 && "Київ"} {i.town === 1 && "Львів"}
            {i.town === 2 && "Львів"} {i.town === 3 && "Івано-Франківськ"}{" "}
            {localStorage.getItem("admin_token") && (
              <Link to={`/car/${i.id}/edit/carTown`}>(змінити)</Link>
            )}{" "}
            / {i.year} / {i.engine}
          </p>
          <div className="d-grid">
            <button type="button" className="btn btn-warning mt-2 fw-light">
              Обрати
            </button>
            {localStorage.getItem("admin_token") && (
              <button
                onClick={() => sendRequest(i.id)}
                className="btn btn-danger mt-2 fw-light"
              >
                Видалити
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
