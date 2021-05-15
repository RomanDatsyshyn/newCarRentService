import React from "react";

const Profile = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12 col-md-4 col-sm-6 ">
          <center>
            <img
              src="https://www.trzcacak.rs/myfile/full/65-650485_login-user-default-user-image-png.png"
              alt="..."
              width="50%"
            />
          </center>
          <h2>{111}</h2>
          <h5>Особистий кабінет</h5>
          <a href={`/edit/`} className="btn warning btn-block">
            Змінити персональні дані
          </a>

          <button
            // onClick={removeUser(this.props.history)}
            className="btn info btn-block"
            type="submit"
          >
            Видалити акаунт
          </button>
          <button
            // onClick={this.jsPdfGenerator}
            className="btn alert-success btn-block"
            type="primary"
          >
            Мої замовлення в PDF
          </button>
        </div>
        <div className="col-12 col-md-8 col-sm-6 ">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="card-body">
                  <h2 className="card-title">Список моїх замовлень:</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Початок замовлення</th>
                        <th scope="col">Закінчення замовлення</th>
                        <th scope="col">Ціна</th>
                        <th scope="col">Дії</th>
                      </tr>
                    </thead>
                    {/* <tbody dangerouslySetInnerHTML={{ __html: html }}></tbody> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
