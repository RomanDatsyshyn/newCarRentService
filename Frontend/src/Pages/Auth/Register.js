import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const Register = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [nameErrors, setNameErrors] = useState("");
  const [ageErrors, setAgeErrors] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [passwordErrors, setpasswordErrors] = useState("");

  const [errors, setErrors] = useState("");

  const validation = () => {
    setNameErrors("");
    setAgeErrors("");
    setPhoneErrors("");
    setpasswordErrors("");

    let errors = {};

    if (name.length < 2) {
      errors.name = "Введіть мінімум 2 символи";
    }

    if (age < 21) {
      errors.age = "Вам має бути не менше 21 року";
    }

    if (phone.length < 10) {
      errors.phone = "Довжина номеру має бути не менше 10 символів";
    }

    if (password.length < 6) {
      errors.password = "Довжина пароля має бути більше 5 символів";
    }

    if (errors.age || errors.name || errors.phone || errors.password) {
      if (errors.age) {
        setAgeErrors(errors.age);
      }

      if (errors.name) {
        setNameErrors(errors.name);
      }

      if (errors.phone) {
        setPhoneErrors(errors.phone);
      }

      if (errors.password) {
        setpasswordErrors(errors.password);
      }
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.registert({
      name: name,
      age: age,
      phone: phone,
      password: password,
    })
      .then((res) => {
        const { data, status } = res;

        if (status) {
          history.push("/login");
        } else {
          setErrors(data.errors);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1 className="display-4 text-center mt-2">Реєстрація</h1>
      <p className="lead text-center">
        Створіть ваш особистий кабінет на RentCar
      </p>
      {errors && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Ваше ім'я</label>
        </h5>
        <input
          type="text"
          className={
            nameErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть ваше ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameErrors && (
          <small className="form-text text-danger  ">{nameErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Ваш вік</label>
        </h5>
        <input
          type="number"
          className={
            ageErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Скільки вам років?"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {ageErrors && (
          <small className="form-text text-danger  ">{ageErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Номер телефону</label>
        </h5>
        <input
          type="number"
          className={
            phoneErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть ваш номер телефону"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneErrors && (
          <small className="form-text text-danger  ">{phoneErrors}</small>
        )}
      </div>

      <div className="form-group mt-4">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Ваш пароль</label>
        </h5>
        <input
          type="password"
          className={
            passwordErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть ваш пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors && (
          <small className="form-text text-danger  ">{passwordErrors}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          Створити кабінет
        </div>
      </div>
    </>
  );
};

export default Register;
