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

  useEffect(() => {
    CommonDataService.getAnalytics()
      .then((res) => {
        const { data } = res;

        if (data.success) {
          //Days
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
        <p className="lead text-center">Самий прибутковий день - </p>
        <p className="lead text-center">Самий збитковий день - </p>
        <ZingChart data={daysConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по містах
        </h1>
        <ZingChart data={citiesConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по сегментам
        </h1>
        <ZingChart data={segmentsConfig} />
      </div>

      <div>
        <h1 className="display-4 text-center mt-2">
          Статистика замовлень по рокам авто
        </h1>
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
        <ZingChart data={byCarsConfig} />
      </div>
    </>
  );
};

export default Analytics;
