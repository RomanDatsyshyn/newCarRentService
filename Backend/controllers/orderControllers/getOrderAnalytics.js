const Order = require("../../database/models/Order");
const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const orders = await Order.find({});
    // const userOrders = [];
    const Days = [];
    const Cities = [];
    const Segments = [];
    const Years = [];
    const Transmissions = [];

    // -------------Дні----------------//

    Monday = 0;
    Tuesday = 0;
    Wednesday = 0;
    Thursday = 0;
    Friday = 0;
    Saturday = 0;
    Sunday = 0;

    orders.map((o) => {
      let DAY = new Date(o.fromDate);

      if (DAY.getDay() === 1) Monday++;
      if (DAY.getDay() === 2) Tuesday++;
      if (DAY.getDay() === 3) Wednesday++;
      if (DAY.getDay() === 4) Thursday++;
      if (DAY.getDay() === 5) Friday++;
      if (DAY.getDay() === 6) Saturday++;
      if (DAY.getDay() === 7) Sunday++;
    });

    Days.push({
      monday: Monday,
      tuesday: Tuesday,
      wednesday: Wednesday,
      thursday: Thursday,
      friday: Friday,
      saturday: Saturday,
      sunday: Sunday,
    });

    // -------------Міста----------------//

    let Kyiv = 0;
    let Odessa = 0;
    let Lviv = 0;
    let IF = 0;

    for (let i = 0; i < orders.length; i++) {
      const carData = await Car.findById(orders[i].car);

      if (carData && carData.town) {
        if (carData.town === 0) Kyiv++;
        if (carData.town === 1) Odessa++;
        if (carData.town === 2) Lviv++;
        if (carData.town === 3) IF++;
      }
    }

    Cities.push({
      kyiv: Kyiv,
      odessa: Odessa,
      lviv: Lviv,
      if: IF,
    });

    // -------------Сегменти----------------//

    let Econom = 0;
    let Standart = 0;
    let Comfort = 0;
    let Business = 0;
    let Premium = 0;

    for (let i = 0; i < orders.length; i++) {
      const carData = await Car.findById(orders[i].car);

      if (carData && carData.segment) {
        if (carData.segment === 0) Econom++;
        if (carData.segment === 1) Standart++;
        if (carData.segment === 2) Comfort++;
        if (carData.segment === 3) Business++;
        if (carData.segment === 4) Premium++;
      }
    }

    Segments.push({
      econom: Econom,
      standart: Standart,
      comfort: Comfort,
      business: Business,
      premium: Premium,
    });

    // -------------Роки----------------//

    let year2022 = 0;
    let year2021 = 0;
    let year2020 = 0;
    let year2019 = 0;
    let year2018 = 0;
    let year2017 = 0;
    let year2016 = 0;
    let year2015 = 0;
    let year2014 = 0;
    let year2013 = 0;
    let year2012 = 0;
    let year2011 = 0;
    let year2010 = 0;

    for (let i = 0; i < orders.length; i++) {
      const carData = await Car.findById(orders[i].car);

      if (carData && carData.year) {
        if (carData.year === 2022) year2022++;
        if (carData.year === 2021) year2021++;
        if (carData.year === 2020) year2020++;
        if (carData.year === 2019) year2019++;
        if (carData.year === 2018) year2018++;
        if (carData.year === 2017) year2017++;
        if (carData.year === 2016) year2016++;
        if (carData.year === 2015) year2015++;
        if (carData.year === 2014) year2014++;
        if (carData.year === 2013) year2013++;
        if (carData.year === 2012) year2012++;
        if (carData.year === 2011) year2011++;
        if (carData.year === 2010) year2010++;
      }
    }

    Years.push({
      2022: year2022,
      2021: year2021,
      2020: year2020,
      2019: year2019,
      2018: year2018,
      2017: year2017,
      2016: year2016,
      2015: year2015,
      2014: year2014,
      2013: year2013,
      2012: year2012,
      2011: year2011,
      2010: year2010,
    });

    // -------------Коробка передач----------------//

    let Mechanics = 0;
    let Automat = 0;

    for (let i = 0; i < orders.length; i++) {
      const carData = await Car.findById(orders[i].car);

      if (carData && carData.transmission) {
        if (carData.transmission === 0) Mechanics++;
        if (carData.transmission === 1) Automat++;
      }
    }

    Transmissions.push({
      mechanics: Mechanics,
      automat: Automat,
    });

    res.status(200).json({
      success: true,
      // data: userOrders.map((o) => o.toJSON()),
      data: Transmissions,
      errors: null,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "GetOrderById",
      errors: e.message,
    });
  }
};
