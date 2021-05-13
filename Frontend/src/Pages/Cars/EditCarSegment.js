import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CommonDataService from "../../API/Common.service";

const EditCarSegment = (props) => {
  let history = useHistory();

  const [segment, setSegment] = useState("");
  const [segmentErrors, setSegmentErrors] = useState("");
  const [errors, setErrors] = useState("");

  const validation = () => {
    setSegmentErrors("");

    let errors = {};

    if (segment > 3) {
      errors.segment = "Введіть код сегмента правильно";
    }

    if (errors.segment) {
      setSegmentErrors(errors.segment);
    } else {
      sendRequest();
    }
  };

  const sendRequest = () => {
    CommonDataService.editCarSegment(props.match.params.id, {
      segment: segment,
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
        Сторінка зміни сегента авто
      </h1>
      {errors && (
        <div class="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
      <div className="form-group mt-2">
        <h5 className="fw-normal">
          <label htmlFor="Phone">Сегмент автомобіля</label>
        </h5>
        <input
          type="number"
          className={
            segmentErrors
              ? "form-control form-control-lg mt-1 border border-danger"
              : "form-control form-control-lg mt-1"
          }
          placeholder="Введіть код з діапазону (0-4)"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
        />
        {segmentErrors && (
          <small className="form-text text-danger  ">{segmentErrors}</small>
        )}
      </div>

      <div className="d-grid mb-4">
        <div
          onClick={() => validation()}
          className="btn btn-lg btn-block info mt-4"
        >
          Змінити сегмент
        </div>
      </div>
    </>
  );
};

export default EditCarSegment;
