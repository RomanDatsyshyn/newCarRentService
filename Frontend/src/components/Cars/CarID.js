import React from "react";

const CarID = ({ data }) => {
  const price = data.price;
  const price5 = Math.ceil(data.price - data.price * 0.05);
  const price10 = Math.ceil(data.price - data.price * 0.1);
  const price15 = Math.ceil(data.price - data.price * 0.15);

  return (
    <div className="col-12 col-md-8 col-sm-6 ">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <hr />
              <h6>
                {data.segment === 0 && "Економ"}
                {data.segment === 1 && "Стандарт"}
                {data.segment === 2 && "Комфорт"}
                {data.segment === 3 && "Бізнес"}
                {data.segment === 4 && "Преміум"}
              </h6>
              <h6>
                {data.town === 0 && "Київ"} {data.town === 1 && "Львів"}
                {data.town === 2 && "Львів"}
                {data.town === 3 && "Івано-Франківськ"} / {data.year} /{" "}
                {data.transmission === 0 && "КПП: Мехакіка"}
                {data.transmission === 1 && "КПП: Автомат"} / {data.engine}
              </h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">1-2 Доби</th>
                    <th scope="col">3-7 Діб</th>
                    <th scope="col">8-30 Діб</th>
                    <th scope="col">31-60 Діб</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{price}$</td>
                    <td>{price5}$</td>
                    <td>{price10}$</td>
                    <td>{price15}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <img
            src={`http://localhost:3001/${data.carImage}`}
            className="card-img-top w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CarID;
