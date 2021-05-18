import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const EditCarPrice = (props) => {
  let history = useHistory();

  const [userId, setUserId] = useState("");
  const [userIdErrors, setuserIdErrors] = useState("");
  const [errors, setErrors] = useState("");

  const validation = () => {
    setuserIdErrors("");

    let errors = {};

    if (userId.length < 10) {
      errors.userId = "Мінімальна довжина - 10 символів";
    }

    if (errors.userId) {
      setuserIdErrors(errors.userId);
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.unblockUser(userId)
      .then((res) => {
        const { data, status } = res;

        if (status === 200) {
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
    <>
      <h1 className="display-4 text-center mt-2">
        Сторінка розблокування користувача
      </h1>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Айді користувача</label>
        </h5>
        <input
          type="text"
          className={
            userIdErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть айді користувача"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        {userIdErrors && (
          <small className="form-text text-danger  ">{userIdErrors}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          розблокувати користувача
        </div>
      </div>
    </>
  );
};

export default EditCarPrice;
