import React from "react";
import mercedes from "../../cars/1.jpeg";

const Home = () => {
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
      <div class="d-grid mb-4">
        <button type="button" class="btn info">
          Підібрати авто
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div class="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col">245$</div>
                  <div class="col">233$</div>
                  <div class="col">221$</div>
                  <div class="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div class="d-grid">
                <button type="button" class="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div class="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col">245$</div>
                  <div class="col">233$</div>
                  <div class="col">221$</div>
                  <div class="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div class="d-grid">
                <button type="button" class="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div class="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col">245$</div>
                  <div class="col">233$</div>
                  <div class="col">221$</div>
                  <div class="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div class="d-grid">
                <button type="button" class="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div class="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div class="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div class="container">
                <div class="row align-items-start">
                  <div class="col">245$</div>
                  <div class="col">233$</div>
                  <div class="col">221$</div>
                  <div class="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div class="d-grid">
                <button type="button" class="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
