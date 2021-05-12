import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const AddCar = () => {
  let history = useHistory();

  const [carImage, setСarImage] = useState({});
  const [town, setTown] = useState("");
  const [name, setName] = useState("");
  const [segment, setSegment] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [transmission, setTransmission] = useState("");
  const [engine, setEngine] = useState("");

  const [carImageErrors, setСarImageErrors] = useState("");
  const [townErrors, setTownErrors] = useState("");
  const [nameErrors, setNameErrors] = useState("");
  const [segmentErrors, setSegmentErrors] = useState("");
  const [yearErrors, setYearErrors] = useState("");
  const [priceErrors, setPriceErrors] = useState("");
  const [transmissionErrors, setTransmissionErrors] = useState("");
  const [engineErrors, setEngineErrors] = useState("");

  const [errors, setErrors] = useState("");

  const validation = () => {
    setСarImageErrors("");
    setTownErrors("");
    setNameErrors("");
    setSegmentErrors("");
    setYearErrors("");
    setPriceErrors("");
    setTransmissionErrors("");
    setEngineErrors("");

    let errors = {};

    if (!carImage) {
      errors.carImage = "Завантажте фото";
    }

    if (town > 3 || !town) {
      errors.town = "Введіть коректний номер міста";
    }

    if (name.length < 4) {
      errors.name = "Введіть повне ім'я автомобіля";
    }

    if (segment > 4 || !segment) {
      errors.segment = "Введіть коректний номер міста сегментa";
    }

    if (year < 2005 || year > 2022) {
      errors.year = "Рік авто має бути в межах 2005-2022";
    }

    if (price < 20) {
      errors.price = "Мінімальна ціна оренди - 20$";
    }

    if (transmission > 2 || !transmission) {
      errors.transmission = "Введіть коректний номер трансмісії";
    }

    if (engine.length < 4) {
      errors.engine = "Введіть тип двигуна";
    }

    if (
      errors.carImage ||
      errors.town ||
      errors.name ||
      errors.segment ||
      errors.year ||
      errors.price ||
      errors.transmission ||
      errors.engine
    ) {
      if (errors.carImage) {
        setСarImageErrors(errors.carImage);
      }
      if (errors.town) {
        setTownErrors(errors.town);
      }
      if (errors.name) {
        setNameErrors(errors.name);
      }
      if (errors.segment) {
        setSegmentErrors(errors.segment);
      }
      if (errors.year) {
        setYearErrors(errors.year);
      }
      if (errors.price) {
        setPriceErrors(errors.price);
      }
      if (errors.transmission) {
        setTransmissionErrors(errors.transmission);
      }
      if (errors.engine) {
        setEngineErrors(errors.engine);
      }
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    let formData = new FormData();

    formData.append("carImage", carImage);
    formData.append("town", town);
    formData.append("name", name);
    formData.append("segment", segment);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("transmission", transmission);
    formData.append("engine", engine);

    CommonDataService.addCar(formData)
      .then((res) => {
        const { data, status } = res;

        console.log(data);

        if (status === 201) {
          history.push("/");
        } else {
          setErrors(data.errors);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1 className="display-4 text-center mt-2">Сторінка додавання авто</h1>
      <p className="lead text-center">
        Додавання машини до автопарку <b>RentCar</b>
      </p>
      {errors && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть місто</label>
        </h5>
        <input
          type="text"
          className={
            townErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Обирайте в діапазоні (0-3)"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        />
        {townErrors && (
          <small className="form-text text-danger  ">{townErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть ім'я авто</label>
        </h5>
        <input
          type="text"
          className={
            nameErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Mercedes S-Class"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameErrors && (
          <small className="form-text text-danger  ">{nameErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть сегмент авто</label>
        </h5>
        <input
          type="text"
          className={
            segmentErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Обирайте в діапазоні (0-4)"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
        />
        {segmentErrors && (
          <small className="form-text text-danger  ">{segmentErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть рік авто</label>
        </h5>
        <input
          type="text"
          className={
            yearErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="2021"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {yearErrors && (
          <small className="form-text text-danger  ">{yearErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть ціну оренди</label>
        </h5>
        <input
          type="text"
          className={
            priceErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="127"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {priceErrors && (
          <small className="form-text text-danger  ">{priceErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть тип трансмісії</label>
        </h5>
        <input
          type="text"
          className={
            transmissionErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Обирайте в діапазоні (0-1)"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />
        {transmissionErrors && (
          <small className="form-text text-danger  ">
            {transmissionErrors}
          </small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Введіть тип двигуна</label>
        </h5>
        <input
          type="text"
          className={
            engineErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Дизель 6.3"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        />
        {engineErrors && (
          <small className="form-text text-danger  ">{engineErrors}</small>
        )}
      </div>

      <div className="custom-file mt-4">
        <h5 className="fw-normal">
          <label htmlFor="formFileSm">Завантажте фото авто</label>
        </h5>

        <input
          className="form-control form-control-lg"
          id="formFileSm"
          type="file"
          name="carImage"
          onChange={(e) => setСarImage(e.target.files[0])}
          required
        ></input>

        {carImageErrors && (
          <small className="form-text text-danger">{carImageErrors}</small>
        )}
      </div>

      <div
        className="btn btn-lg btn-block info mt-4 mb-2"
        onClick={() => validation()}
      >
        Додати авто
      </div>
      <br />
    </div>
  );
};

export default AddCar;
