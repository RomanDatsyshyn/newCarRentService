const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const carData = await Car.findById(id);

    res.status(200).json({
      success: true,
      data: carData,
      errors: null,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "getCarById",
      errors: e.message,
    });
  }
};
