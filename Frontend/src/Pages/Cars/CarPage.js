import React from "react";
import mercedes from "../../images/1.jpeg";

const CarPage = () => {
  return (
    <>
      <h1 className="display-4 text-center">Наш автопарк</h1>
      <p className="lead text-center">Хороші автомобілі для хороших людей!</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div className="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">245$</div>
                  <div className="col">233$</div>
                  <div className="col">221$</div>
                  <div className="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div className="d-grid">
                <button type="button" className="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div className="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">245$</div>
                  <div className="col">233$</div>
                  <div className="col">221$</div>
                  <div className="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div className="d-grid">
                <button type="button" className="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div className="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">245$</div>
                  <div className="col">233$</div>
                  <div className="col">221$</div>
                  <div className="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div className="d-grid">
                <button type="button" className="btn btn-warning mt-2 fw-light">
                  Обрати
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={mercedes} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Mercedes-AMG S 63 Coupe</h5>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col fw-bold">
                    1-2 <br />
                    Доби
                  </div>
                  <div className="col fw-bold">
                    3-7 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    8-30 <br />
                    Діб
                  </div>
                  <div className="col fw-bold">
                    31-60 <br />
                    Діб
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col">245$</div>
                  <div className="col">233$</div>
                  <div className="col">221$</div>
                  <div className="col">209$</div>
                </div>
              </div>
              <hr />
              <p className="card-text fw-light mt-3">
                ПРЕМІУМ
                <br />
                Львів / 2019 / Бензин 6.3
              </p>
              <div className="d-grid">
                <button type="button" className="btn btn-warning mt-2 fw-light">
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

export default CarPage;
