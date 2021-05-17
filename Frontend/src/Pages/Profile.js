import React, { useState, useEffect } from "react";

import CommonDataService from "../API/Common.service";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    CommonDataService.getUserData()
      .then((res) => {
        const { data } = res;

        setUserData(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(".");
  };

  let html = "";

  if (userData.orders) {
    for (let i = 0; i < userData.orders.length; i++) {
      html += `<tr>
        <th scope='row'>${i + 1}</th>
        <td>${convertDate(userData.orders[i].fromDate)}</td>
        <td>${convertDate(userData.orders[i].toDate)}</td>
        <td>${userData.orders[i].price}</td>
        <td>
          <a href='/orders/edit/${
            userData.orders[i].id
          }' className='btn warning'>
            Змінити
          </a>
          <a href='/orders/remove/${
            userData.orders[i].id
          }' className='btn alert-danger'>
            Видалити
          </a>
        </td>
      </tr>`;
    }
  }

  return (
    <>
      <div className="row mt-4">
        <div className="col-12 col-md-4 col-sm-6 ">
          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="..."
              width="50%"
            />
          </center>
          <h2>{userData.name}</h2>
          <h5>Особистий кабінет</h5>
          <a
            href={`/edit/${userData.id}`}
            className="btn btn-warning btn-block mb-1"
          >
            Змінити персональні дані
          </a>
          <br />
          <button
            // onClick={removeUser(this.props.history)}
            className="btn info btn-block mb-3"
            type="submit"
          >
            Видалити акаунт
          </button>
          <br />
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
                        <th scope="col">Дата початку оренди</th>
                        <th scope="col">Дата закінчення оренди</th>
                        <th scope="col">Ціна</th>
                        <th scope="col">Дії</th>
                      </tr>
                    </thead>
                    <tbody dangerouslySetInnerHTML={{ __html: html }}></tbody>
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
