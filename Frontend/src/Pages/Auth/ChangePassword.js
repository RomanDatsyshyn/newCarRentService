import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const ChangePassword = (props) => {
  let history = useHistory();

  const [password, setPasssword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [errors, setErrors] = useState("");

  const validation = () => {
    setPasswordErrors("");

    let errors = {};

    if (password.length < 5) {
      errors.password = "Мінімальна довжина - 5 символів";
    }

    if (errors.password) {
      setPasswordErrors(errors.password);
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.changePassword({
      password: password,
    })
      .then((res) => {
        const { data, status } = res;

        if (status === 200) {
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
      <h1 className="display-4 text-center mt-2">Сторінка зміни пароля</h1>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Новий пароль</label>
        </h5>
        <input
          type="text"
          className={
            passwordErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть новий пароль"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
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
          Змінити пароль
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
