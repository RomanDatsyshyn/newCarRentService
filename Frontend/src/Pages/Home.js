import React, { useEffect, useState } from "react";

import CommonDataService from "../API/Common.service";

import CarItem from "./Cars/CarItem";

const Home = () => {
  const [cars, setCars] = useState([]);

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

  let items = cars && cars.map((i) => <CarItem i={i} key={Math.random()} />);

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
            // onChange={this.onChange}
          >
            <option value="DEFAULT" disabled>
              Оберіть місто...
            </option>
            <option value="Львів">Львів</option>
            <option value="Київ">Київ</option>
            <option value="Івано-Франківськ">Івано-Франківськ</option>
            <option value="Тернопіль">Тернопіль</option>
            <option value="Харків">Харків</option>
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
            // onChange={this.onChange}
          >
            <option value="DEFAULT" disabled>
              Обрати клас автомобіля...
            </option>
            <option value="Економ">Економ</option>
            <option value="Стандарт">Стандарт</option>
            <option value="Комфорт">Комфорт</option>
            <option value="ПРЕМІУМ">ПРЕМІУМ</option>
            <option value="Позашляховики">Позашляховики</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="datepicker">Дата отримання авто:</label>
          <input
            name="fromDate"
            type="date"
            // onChange={this.onChange}
            className="form-control  mt-1"
            required
          />
        </div>
        <div className="col">
          <label htmlFor="validationDefault05">Дата повернення авто:</label>
          <input
            name="toDate"
            type="date"
            // onChange={this.onChange}
            className="form-control  mt-1"
            required
          />
        </div>
      </div>
      <div className="d-grid mb-4">
        <button type="button" className="btn info">
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
