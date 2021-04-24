const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { town, name, segment, year, price, transmission, engine } = req.body;

    if (req.file === undefined) {
      res
        .status(404)
        .json({
          success: false,
          data: null,
          errors: "Завантажте зображення автомобіля",
        })
        .end();
    } else {
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
    }
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "AddCar",
      errors: e.message,
    });
  }
};
