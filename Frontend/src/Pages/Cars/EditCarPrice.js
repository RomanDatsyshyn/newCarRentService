import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const EditCarPrice = (props) => {
  let history = useHistory();

  const [price, setPrice] = useState("");
  const [priceErrors, setPriceErrors] = useState("");
  const [errors, setErrors] = useState("");

  const validation = () => {
    setPriceErrors("");

    let errors = {};

    if (price < 20) {
      errors.price = "Мінімальна ціна оренди - 20$";
    }

    if (errors.price) {
      setPriceErrors(errors.price);
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.editCarPrice(props.match.params.id, {
      price: price,
    })
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
        Сторінка зміни ціни прокату
      </h1>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Ціна прокату</label>
        </h5>
        <input
          type="number"
          className={
            priceErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть ціну"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {priceErrors && (
          <small className="form-text text-danger  ">{priceErrors}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          Змінити ціну
        </div>
      </div>
    </>
  );
};

export default EditCarPrice;
