const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const cars = await Car.find({});

    res.status(200).json({
      success: true,
      data: cars.map((c) => c.toJSON()),
      errors: null,
    });
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "getAll",
      errors: e.message,
    });
  }
};
