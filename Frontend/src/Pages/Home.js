import React, { useEffect, useState } from "react";

import CommonDataService from "../API/Common.service";

import CarItem from "./Cars/CarItem";

const Home = () => {
  const [cars, setCars] = useState([]);

  const [town, setTown] = useState("");
  const [segment, setSegment] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    retrieveCars();
  }, []);

  const retrieveCars = () => {
    CommonDataService.getAllCars()
      .then((res) => {
        const { data } = res;
        setCars(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let items =
    cars &&
    cars.map((i) => (
      <CarItem i={i} key={Math.random()} retrieveCars={() => retrieveCars()} />
    ));

  const validation = () => {
    CommonDataService.getByParams(town, segment, fromDate, toDate)
      .then((res) => {
        const { data } = res;

        if (data.success) {
          setCars(data.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-3 mt-1">
        <div className="col">
          <label htmlFor="inputState">
            <i className="fas fa-city"></i> Місто
          </label>
          <select
            id="inputState"
            name="town"
            className="form-control mt-1"
            defaultValue={"DEFAULT"}
            onChange={(e) => setTown(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Оберіть місто...
            </option>
            <option value="2">Львів</option>
            <option value="0">Київ</option>
            <option value="3">Івано-Франківськ</option>
            <option value="1">Одесса</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputState">
            <i className="fas fa-car-side"></i> Клас автомобіля
          </label>
          <select
            id="inputState"
            name="class"
            className="form-control mt-1"
            defaultValue={"DEFAULT"}
            onChange={(e) => setSegment(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Обрати клас автомобіля...
            </option>
            <option value="0">Економ</option>
            <option value="1">Стандарт</option>
            <option value="2">Комфорт</option>
            <option value="3">Бізнес</option>
            <option value="4">ПРЕМІУМ</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="datepicker">Дата отримання авто:</label>
          <input
            name="fromDate"
            type="date"
            onChange={(e) => setFromDate(e.target.value)}
            className="form-control  mt-1"
            required
          />
        </div>
        <div className="col">
          <label htmlFor="validationDefault05">Дата повернення авто:</label>
          <input
            name="toDate"
            type="date"
            onChange={(e) => setToDate(e.target.value)}
            className="form-control  mt-1"
            required
          />
        </div>
      </div>
      <div className="d-grid mb-4">
        <button onClick={() => validation()} className="btn info">
          Підібрати авто
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items ? (
          items
        ) : (
          <p className="lead text-center">Немає жодного автомобіля</p>
        )}
      </div>
    </>
  );
};

export default Home;
