import React, { useState } from "react";

import "zingchart/es6";
import ZingChart from "zingchart-react";

const Analytics = () => {
  const [config, setConfig] = useState({
    type: "bar",
    plot: {
      valueBox: {
        text: "%v",
      },
    },
    scaleX: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],
      },
    ],
  });

  return (
    <>
      <div>
        <ZingChart data={config} />
      </div>
    </>
  );
};

export default Analytics;
