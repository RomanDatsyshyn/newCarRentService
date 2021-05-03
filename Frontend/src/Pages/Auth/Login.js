import React from "react";

const Login = () => {
  return (
    <>
      <h1 className="display-4 text-center mt-2">Вхід на сайт</h1>
      <p className="lead text-center">Увійдіть у ваш особистий акаунт</p>
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

        <div className="d-grid mb-4">
          <button type="submit" className="btn btn-lg btn-block info mt-4">
            Увійти
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
