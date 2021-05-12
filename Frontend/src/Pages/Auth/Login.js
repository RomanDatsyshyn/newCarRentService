import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";

import CommonDataService from "../../API/Common.service";

const Login = () => {
  let history = useHistory();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [phoneErrors, setPhoneErrors] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [errors, setErrors] = useState("");

  const validation = () => {
    setPhoneErrors("");
    setPasswordError("");

    let errors = {};

    if (phone.length < 10) {
      errors.phone = "Довжина номеру має бути не менше 10 символів";
    }

    if (password.length < 6) {
      errors.password = "Довжина пароля має бути більше 5 символів";
    }

    if (errors.phone || errors.password) {
      if (errors.phone) {
        setPhoneErrors(errors.phone);
      }

      if (errors.password) {
        setPasswordError(errors.password);
      }
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.login({
      phone: phone,
      password: password,
    })
      .then((res) => {
        const { data } = res;

        if (data.success) {
          const { access_token } = data.data;

          localStorage.setItem("access_token", access_token);

          setAuthToken(access_token);

          history.push("/profile");
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
      <h1 className="display-4 text-center mt-2">Вхід на сайт</h1>
      <p className="lead text-center">Увійдіть у ваш особистий акаунт</p>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
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
            passwordError
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть ваш пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <small className="form-text text-danger  ">{passwordError}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          Увійти
        </div>
      </div>
    </>
  );
};

export default Login;
