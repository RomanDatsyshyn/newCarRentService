const Order = require("../../database/models/Order");
const User = require("../../database/models/User");
const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const orders = await Order.find({});
    const cars = await Car.find({});

    const Days = [];
    const Cities = [];
    const Segments = [];
    const Years = [];
    const Transmissions = [];
    const ByCars = [];
    const Term = [];
    const Ages = [];

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

    // -------------По автомобілю----------------//

    for (let i = 0; i < cars.length; i++) {
      let obj = {
        name: cars[i].id,
        amount: 0,
      };

      for (let j = 0; j < orders.length; j++) {
        if (orders[j].car == cars[i].id) {
          obj.amount++;
        }
      }

      ByCars.push(obj);
    }

    // -------------На який періуд----------------//

    let day1 = 0;
    let day2 = 0;
    let day3 = 0;
    let day4 = 0;
    let day5 = 0;
    let day6 = 0;
    let day7 = 0;
    let day8 = 0;
    let day9 = 0;
    let day10 = 0;
    let day15 = 0;
    let day20 = 0;
    let day25 = 0;
    let day30 = 0;
    let day31 = 0;

    orders.map((o) => {
      let fromDate = new Date(o.fromDate);
      let toDate = new Date(o.toDate);

      var diff = toDate - fromDate;

      var milliseconds = diff;
      var seconds = milliseconds / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;

      if (Math.ceil(days) == 1) day1++;
      if (Math.ceil(days) == 2) day2++;
      if (Math.ceil(days) == 3) day3++;
      if (Math.ceil(days) == 4) day4++;
      if (Math.ceil(days) == 5) day5++;
      if (Math.ceil(days) == 6) day6++;
      if (Math.ceil(days) == 7) day7++;
      if (Math.ceil(days) == 8) day8++;
      if (Math.ceil(days) == 9) day9++;
      if (Math.ceil(days) == 10) day10++;
      if (Math.ceil(days) > 10 && Math.ceil(days) <= 15) day15++;
      if (Math.ceil(days) > 15 && Math.ceil(days) <= 20) day20++;
      if (Math.ceil(days) > 20 && Math.ceil(days) <= 25) day25++;
      if (Math.ceil(days) > 25 && Math.ceil(days) <= 30) day30++;
      if (Math.ceil(days) > 30) day31++;
    });

    Term.push({
      day1: day1,
      day2: day2,
      day3: day3,
      day4: day4,
      day5: day5,
      day6: day6,
      day7: day7,
      day8: day8,
      day9: day9,
      day10: day10,
      day15: day15,
      day20: day20,
      day25: day25,
      day30: day30,
      day31: day31,
    });

    // -------------Роки клієнтів----------------//

    let age20 = 0;
    let age25 = 0;
    let age30 = 0;
    let age35 = 0;
    let age40 = 0;
    let age45 = 0;
    let age50 = 0;
    let age55 = 0;
    let age60 = 0;

    for (let i = 0; i < orders.length; i++) {
      if (orders[i] && orders[i].user) {
        const userData = await User.findById(orders[i].user);

        if (userData.age == 20) age20++;
        if (userData.age > 20 && userData.age <= 25) age25++;
        if (userData.age > 25 && userData.age <= 30) age30++;
        if (userData.age > 30 && userData.age <= 35) age35++;
        if (userData.age > 35 && userData.age <= 40) age40++;
        if (userData.age > 40 && userData.age <= 45) age45++;
        if (userData.age > 45 && userData.age <= 50) age50++;
        if (userData.age > 50 && userData.age <= 55) age55++;
        if (userData.age > 55 && userData.age <= 60) age60++;
      }
    }

    Ages.push({
      20: age20,
      F20T25: age25,
      F25T30: age30,
      F30T35: age35,
      F35T40: age40,
      F40T45: age45,
      F45T50: age50,
      F50T55: age55,
      F55T60: age60,
    });

    // -------------Роки клієнтів+Марки----------------//
    let ModelAndYear = [];

    for (let i = 0; i < orders.length; i++) {
      const userData = await User.findById(orders[i].user);

      let obj = {
        car: orders[i].car,
        year: userData.age,
      };

      ModelAndYear.push(obj);
    }

    // -------------Модифікація ByCars----------------//

    for (let i = 0; i < ByCars.length; i++) {
      const carData = await Car.findById(ByCars[i].name);

      ByCars[i].name = carData.name;
    }

    // -------------Модифікація Days----------------//

    let newDaysFormat = {
      labels: [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
        "Неділя",
      ],
      values: [
        Days[0].monday,
        Days[0].tuesday,
        Days[0].wednesday,
        Days[0].thursday,
        Days[0].friday,
        Days[0].saturday,
        Days[0].sunday,
      ],
    };

    // -------------Модифікація Cities----------------//

    let newCitiesFormat = {
      labels: ["Київ", "Одеса", "Львів", "Івано-Франківськ"],
      values: [Cities[0].kyiv, Cities[0].odessa, Cities[0].lviv, Cities[0].if],
    };

    // -------------Модифікація Segments----------------//

    let newSegmentsFormat = {
      labels: ["Економ", "Стандарт", "Комфорт", "Бізнес", "Преміум"],
      values: [
        Segments[0].econom,
        Segments[0].standart,
        Segments[0].comfort,
        Segments[0].business,
        Segments[0].premium,
      ],
    };

    // -------------Модифікація Years----------------//

    let newYearsFormat = {
      labels: [
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
      ],
      values: [
        Years[0][2022],
        Years[0][2021],
        Years[0][2020],
        Years[0][2019],
        Years[0][2018],
        Years[0][2017],
        Years[0][2016],
        Years[0][2015],
        Years[0][2014],
        Years[0][2013],
        Years[0][2012],
        Years[0][2011],
        Years[0][2010],
      ],
    };

    // -------------Модифікація Transmissions----------------//

    let newTransmissionsFormat = {
      labels: ["Механіка", "Автомат"],
      values: [Transmissions[0].mechanics, Transmissions[0].automat],
    };

    // -------------Модифікація Term----------------//

    let newTermFormat = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "10-15",
        "15-20",
        "20-25",
        "25-30",
        "30+",
      ],
      values: [
        Term[0].day1,
        Term[0].day2,
        Term[0].day3,
        Term[0].day4,
        Term[0].day5,
        Term[0].day6,
        Term[0].day7,
        Term[0].day8,
        Term[0].day9,
        Term[0].day10,
        Term[0].day15,
        Term[0].day20,
        Term[0].day25,
        Term[0].day30,
        Term[0].day31,
      ],
    };

    // -------------Модифікація Ages----------------//

    let newAgesFormat = {
      labels: [
        "20",
        "20-25",
        "25-30",
        "30-35",
        "35-40",
        "40-45",
        "45-50",
        "50-55",
        "55-60",
      ],
      values: [
        Ages[0][20],
        Ages[0].F20T25,
        Ages[0].F25T30,
        Ages[0].F30T35,
        Ages[0].F35T40,
        Ages[0].F40T45,
        Ages[0].F45T50,
        Ages[0].F50T55,
        Ages[0].F55T60,
      ],
    };

    // -------------Модифікація ByCars----------------//

    let ByCarsLabels = [];
    let ByCarsValues = [];

    for (let i = 0; i < ByCars.length; i++) {
      ByCarsLabels.push(ByCars[i].name);
      ByCarsValues.push(ByCars[i].amount);
    }

    let newByCarsFormat = {
      labels: ByCarsLabels,
      values: ByCarsValues,
    };

    // -------------Кінець----------------//

    res.status(200).json({
      success: true,
      data: {
        Days: newDaysFormat,
        Cities: newCitiesFormat,
        Segments: newSegmentsFormat,
        Years: newYearsFormat,
        Transmissions: newTransmissionsFormat,
        ByCars: newByCarsFormat,
        Term: newTermFormat,
        Ages: newAgesFormat,
      },
      errors: null,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "GetAnalytics",
      errors: e.message,
    });
  }
};
