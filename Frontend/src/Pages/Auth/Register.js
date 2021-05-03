import React from "react";

const Register = () => {
  return (
    <>
      <h1 className="display-4 text-center mt-2">Реєстрація</h1>
      <p className="lead text-center">
        Створіть ваш особистий акаунт на <b>RentCar</b>
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="Phone">1111</label>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="11"
            name="2222"
            // value={value}
            // onChange={onChange}
            // disabled={disabled}
          />
          {/* {info && <small className="form-text text-muted">{info}</small>} */}
          {/* {error && <div className="invalid-feedback">{error}</div>} */}
        </div>

        <div className="form-group">
          <label htmlFor="Phone">1111</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="11"
            name="2222"
            // value={value}
            // onChange={onChange}
            // disabled={disabled}
          />
          {/* {info && <small className="form-text text-muted">{info}</small>} */}
          {/* {error && <div className="invalid-feedback">{error}</div>} */}
        </div>

        <div className="form-group">
          <label htmlFor="Phone">1111</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="11"
            name="2222"
            // value={value}
            // onChange={onChange}
            // disabled={disabled}
          />
          {/* {info && <small className="form-text text-muted">{info}</small>} */}
          {/* {error && <div className="invalid-feedback">{error}</div>} */}
        </div>

        <div className="d-grid mb-4">
          <button type="submit" className="btn btn-lg btn-block info mt-4">
            Увійти
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
