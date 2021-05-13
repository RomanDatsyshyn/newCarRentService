import React, { useEffect, useState } from "react";

import CommonDataService from "../../API/Common.service";

import AddOrder from "../../components/Cars/AddOrder";
import CarItem from "../../components/Cars/CarID";

const CarPage = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    CommonDataService.GetById(props.match.params.id)
      .then((res) => {
        const { data } = res;

        if (data.success) {
          setData(data.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="row mt-4">
        <AddOrder data={data} />
        <CarItem data={data} />
      </div>
    </>
  );
};

export default CarPage;
