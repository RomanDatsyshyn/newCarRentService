import React, { useEffect, useState } from "react";

import CommonDataService from "../../API/Common.service";

import CarItem from "../Cars/CarItem";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    retrieveCars();
  }, []);

  const retrieveCars = () => {
    CommonDataService.getAllCars()
      .then((res) => {
        const { data } = res;
        setCars(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let items =
    cars &&
    cars.map((i) => (
      <CarItem i={i} key={Math.random()} retrieveCars={() => retrieveCars()} />
    ));

  return (
    <>
      <h1 className="display-4 text-center">Наш автопарк</h1>
      <p className="lead text-center">Хороші автомобілі для хороших людей!</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items ? (
          items
        ) : (
          <p className="lead text-center">Немає жодного автомобіля</p>
        )}
      </div>
    </>
  );
};

export default Cars;
