import React from "react";

const CarItem = ({ i }) => {
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
            {i.segment === 0 && "Економ"}
            {i.segment === 1 && "Стандарт"}
            {i.segment === 2 && "Комфорт"}
            {i.segment === 3 && "Бізнес"}
            {i.segment === 4 && "Преміум"}
            <br />
            {i.town === 0 && "Київ"} {i.town === 1 && "Львів"}
            {i.town === 2 && "Львів"} {i.town === 3 && "Івано-Франківськ"} /{" "}
            {i.year} / {i.engine}
          </p>
          <div className="d-grid">
            <button type="button" className="btn btn-warning mt-2 fw-light">
              Обрати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
