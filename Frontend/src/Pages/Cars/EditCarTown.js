import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const EditCarTown = (props) => {
  let history = useHistory();

  const [town, setTown] = useState("");
  const [townErrors, setTownErrors] = useState("");
  const [errors, setErrors] = useState("");

  const validation = () => {
    setTownErrors("");

    let errors = {};

    if (town > 3) {
      errors.town = "Введіть код міста правильно";
    }

    if (errors.town) {
      setTownErrors(errors.town);
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.editCarTown(props.match.params.id, {
      town: town,
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
      <h1 className="display-4 text-center mt-2">Сторінка зміни міста авто</h1>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Місто автомобіля</label>
        </h5>
        <input
          type="number"
          className={
            townErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть код з діапазону (0-3)"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        />
        {townErrors && (
          <small className="form-text text-danger  ">{townErrors}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          Змінити місто
        </div>
      </div>
    </>
  );
};

export default EditCarTown;
