const Car = require("../../database/models/Car");
const Order = require("../../database/models/Order");

const isDateInRange = (date, from, to) => {
  return date > from && date < to ? true : false;
};

const isDateAvaliable = (from, to, fOrder, tOrder) => {
  const f = isDateInRange(from, fOrder, tOrder);
  const t = isDateInRange(to, fOrder, tOrder);

  if (f == true || t == true) {
    console.log("Початкова або кінцева дата входить в діапазон");
    return false;
  } else if (from < fOrder && to > tOrder) {
    console.log(
      "початкова дата менше за діапазон, але кінцева більша за діазон"
    );
    return false;
  } else return true;
};

module.exports = async (req, res) => {
  try {
    let { town, segment, fromDate, toDate } = req.query;

    let fromDateModified = new Date(fromDate);
    let toDateModified = new Date(toDate);

    let avaliableCars = [];
    let сarsByParams = [];

    // Отримуємо всі авто
    const cars = await Car.find({});

    // Вибираємо авто з потрібними town і class
    cars.map((c) => {
      if (c.town == town && c.segment == segment) {
        avaliableCars.push(c);
      }
    });

    for (let i = 0; i < avaliableCars.length; i++) {
      // Якшо пусті ордери, то добавляємо авто в список доступних
      if (avaliableCars[i].orders.length == 0) {
        сarsByParams.push(avaliableCars[i]);
      } else {
        // Якщо ордери не пусті, то:
        const orders = avaliableCars[i].orders;
        let status = [];
        let Avaliable = true;

        // Проходимося по всіх ордерах конкретної машини
        for (let i = 0; i < orders.length; i++) {
          let order = await Order.findById(orders[i]);

          status.push(
            isDateAvaliable(
              fromDateModified,
              toDateModified,
              order.fromDate,
              order.toDate
            )
          );
        }

        // Перевіряємо чи немає конфліктів із вже існуючими замовленнями на цю машину
        for (let i = 0; i < status.length; i++) {
          if (status[i] == false) {
            Avaliable = false;
          }
        }

        // Якшо авто не конфліктує з іншими замовленнями, то додаємо цю машину в список доступних
        if (Avaliable) {
          сarsByParams.push(avaliableCars[i]);
        }
      }
    }

    res.status(200).json({
      success: true,
      data: сarsByParams.map((car) => car.toJSON()),
      errors: null,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "getCarsByParams",
      errors: e.message,
    });
  }
};
