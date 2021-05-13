import React, { useState, useEffect } from "react";

import CommonDataService from "../../API/Common.service";

const AddOrder = ({ data }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const validate = () => {
    let reqData = {
      fromDate: fromDate,
      toDate: toDate,
      carId: data.id,
      price: price,
      content: content,
    };

    sendRequest(reqData);
  };

  const sendRequest = (reqData) => {
    CommonDataService.createOrder(reqData)
      .then(() => {
        alert("Успішно!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const authLinks = (
    <button className="btn info btn-block" onClick={() => validate()}>
      Зробити замовлення
    </button>
  );

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsUserLogged(true);
    }
  }, []);

  const guestLinks = (
    <div>
      <div className="alert alert-danger" role="alert">
        Увійдіть або зареєструйтесь на сайті, для того щоб зробити замовлення!
      </div>
      <a
        href="#1"
        className="btn btn-secondary btn-block disabled"
        tabIndex="-1"
        role="button"
        aria-disabled="true"
      >
        Зробити замовлення
      </a>
    </div>
  );

  return (
    <div className="col-12 col-md-4 col-sm-6 ">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Параметри замовлення
          </li>
        </ol>
      </nav>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <label htmlFor="datepicker">Дата отримання автомобіля:</label>
          <input
            name="fromDate"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="validationDefault05">
            Дата повернення автомобіля:
          </label>
          <input
            name="toDate"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="validationDefault05">Ціна:</label>
          <input
            name="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="validationDefault05">Особисті побажання:</label>
          <input
            name="content"
            className="form-control"
            placeholder="Доставка авто"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {isUserLogged ? authLinks : guestLinks}
      </div>
    </div>
  );
};

export default AddOrder;
