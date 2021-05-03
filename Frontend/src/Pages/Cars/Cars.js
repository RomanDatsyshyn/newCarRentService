import React from "react";

import AddOrder from "../../Components/Cars/AddOrder";
import CarItem from "../../Components/Cars/CarID";

const Cars = () => {
  return (
    <div className="row mt-4">
      <AddOrder />
      <CarItem />
    </div>
  );
};

export default Cars;
