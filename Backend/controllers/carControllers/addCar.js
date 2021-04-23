const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { town, name, segment, year, price, transmission, engine } = req.body;

    const car = new Car({
      town: town,
      name: name,
      segment: segment,
      year: year,
      price: price,
      transmission: transmission,
      engine: engine,
      carImage: req.file.path,
    });

    const newCar = new Car(car);

    await newCar.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || "CreateUser",
    });
  }
};
