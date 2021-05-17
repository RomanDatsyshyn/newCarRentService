import React, { useState, useEffect } from "react";

import "zingchart/es6";
import ZingChart from "zingchart-react";

import CommonDataService from "../API/Common.service";

const Analytics = () => {
  const [daysConfig, setDaysConfig] = useState({});
  const [citiesConfig, setCitiesConfig] = useState({});
  const [segmentsConfig, setSegmentsConfig] = useState({});
  const [carYearsConfig, setCarYearsConfig] = useState({});
  const [TermConfig, setTermConfig] = useState({});
  const [agesConfig, setAgesConfig] = useState({});
  const [byCarsConfig, setByCarsConfig] = useState({});

  const [max, setmax] = useState("");
  const [min, setMin] = useState("");
  const [max2, setmax2] = useState("");
  const [min2, setMin2] = useState("");
  const [max3, setmax3] = useState("");
  const [min3, setMin3] = useState("");
  const [max4, setmax4] = useState("");
  const [min4, setMin4] = useState("");
  const [max7, setmax7] = useState("");
  const [min7, setMin7] = useState("");

  useEffect(() => {
    CommonDataService.getAnalytics()
      .then((res) => {
        const { data } = res;

        if (data.success) {
          //Days
          let max = {
            name: 0,
            value: 0,
          };

          let min = {
            name: 0,
            value: 99999,
          };

          for (let i = 0; i < data.data.Days.values.length; i++) {
            if (data.data.Days.values[i] > max.value) {
              max.value = data.data.Days.values[i];
              max.name = data.data.Days.labels[i];
            }
          }

          for (let i = 0; i < data.data.Days.values.length; i++) {
            if (data.data.Days.values[i] < min.value) {
              min.value = data.data.Days.values[i];
              min.name = data.data.Days.labels[i];
            }
          }

          setmax(max.name);
          setMin(min.name);

          setDaysConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Days.labels,
            },
            series: [
              {
                values: data.data.Days.values,
              },
            ],
          });
          // Cities
          let max2 = {
            name: 0,
            value: 0,
          };

          let min2 = {
            name: 0,
            value: 99999,
          };

          for (let i = 0; i < data.data.Cities.values.length; i++) {
            if (data.data.Cities.values[i] > max2.value) {
              max2.value = data.data.Cities.values[i];
              max2.name = data.data.Cities.labels[i];
            }
          }

          for (let i = 0; i < data.data.Cities.values.length; i++) {
            if (data.data.Cities.values[i] < min2.value) {
              min2.value = data.data.Cities.values[i];
              min2.name = data.data.Cities.labels[i];
            }
          }

          setmax2(max2.name);
          setMin2(min2.name);

          setCitiesConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Cities.labels,
            },
            series: [
              {
                values: data.data.Cities.values,
              },
            ],
          });
          // Segments
          let max3 = {
            name: 0,
            value: 0,
          };

          let min3 = {
            name: 0,
            value: 99999,
          };

          for (let i = 0; i < data.data.Segments.values.length; i++) {
            if (data.data.Segments.values[i] > max3.value) {
              max3.value = data.data.Segments.values[i];
              max3.name = data.data.Segments.labels[i];
            }
          }

          for (let i = 0; i < data.data.Segments.values.length; i++) {
            if (data.data.Segments.values[i] < min3.value) {
              min3.value = data.data.Segments.values[i];
              min3.name = data.data.Segments.labels[i];
            }
          }

          setmax3(max3.name);
          setMin3(min3.name);

          setSegmentsConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Segments.labels,
            },
            series: [
              {
                values: data.data.Segments.values,
              },
            ],
          });
          // Car years
          let max4 = {
            name: 0,
            value: 0,
          };

          let min4 = {
            name: 0,
            value: 99999,
          };

          for (let i = 0; i < data.data.Years.values.length; i++) {
            if (data.data.Years.values[i] > max4.value) {
              max4.value = data.data.Years.values[i];
              max4.name = data.data.Years.labels[i];
            }
          }

          for (let i = 0; i < data.data.Years.values.length; i++) {
            if (data.data.Years.values[i] < min4.value) {
              min4.value = data.data.Years.values[i];
              min4.name = data.data.Years.labels[i];
            }
          }

          setmax4(max4.name);
          setMin4(min4.name);

          setCarYearsConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Years.labels,
            },
            series: [
              {
                values: data.data.Years.values,
              },
            ],
          });
          // Term
          setTermConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Term.labels,
            },
            series: [
              {
                values: data.data.Term.values,
              },
            ],
          });
          // Ages
          setAgesConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.Ages.labels,
            },
            series: [
              {
                values: data.data.Ages.values,
              },
            ],
          });
          // ByCars
          let max7 = {
            name: 0,
            value: 0,
          };

          let min7 = {
            name: 0,
            value: 99999,
          };

          for (let i = 0; i < data.data.ByCars.values.length; i++) {
            if (data.data.ByCars.values[i] > max7.value) {
              max7.value = data.data.ByCars.values[i];
              max7.name = data.data.ByCars.labels[i];
            }
          }

          for (let i = 0; i < data.data.ByCars.values.length; i++) {
            if (data.data.ByCars.values[i] < min7.value) {
              min7.value = data.data.ByCars.values[i];
              min7.name = data.data.ByCars.labels[i];
            }
          }

          setmax7(max7.name);
          setMin7(min7.name);

          setByCarsConfig({
            type: "bar",
            plot: {
              valueBox: {
                text: "%v",
              },
            },
            scaleX: {
              labels: data.data.ByCars.labels,
            },
            series: [
              {
                values: data.data.ByCars.values,
              },
            ],
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по днях
        </h1>
        <p className="lead text-center">Самий прибутковий день - {max}</p>
        <p className="lead text-center">Самий збитковий день - {min}</p>
        <ZingChart data={daysConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по містах
        </h1>
        <p className="lead text-center">Саме прибуткове місто - {max2}</p>
        <p className="lead text-center">Саме збиткове місто - {min2}</p>
        <ZingChart data={citiesConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по сегментам
        </h1>
        <p className="lead text-center">Самий прибутковий сегмент - {max3}</p>
        <p className="lead text-center">Самий збитковий сегмент - {min3}</p>
        <ZingChart data={segmentsConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по рокам авто
        </h1>
        <p className="lead text-center">Самі прибуткові авто - {max4} року</p>
        <p className="lead text-center">Самі збиткові авто - {min4} року </p>
        <ZingChart data={carYearsConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по тривалості (Дні)
        </h1>
        <ZingChart data={TermConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по віку клієнтів
        </h1>
        <ZingChart data={agesConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень авто
        </h1>
        <p className="lead text-center">Саме прибуткове авто - {max7}</p>
        <p className="lead text-center">Саме збиткове авто - {min7} </p>
        <ZingChart data={byCarsConfig} />
      </div>
    </>
  );
};

export default Analytics;
