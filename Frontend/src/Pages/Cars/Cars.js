import React from "react";

import AddOrder from "../../components/Cars/AddOrder";
import CarItem from "../../components/Cars/CarID";

const Cars = () => {
  return (
    <div className="row mt-4">
      <AddOrder />
      <CarItem />
    </div>
  );
};

export default Cars;
