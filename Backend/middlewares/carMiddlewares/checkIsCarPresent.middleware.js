const Car = require("../../database/models/Car");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const carData = await Car.findById(id);

    if (carData) {
      next();
    } else {
      res.json({
        success: false,
        data: null,
        errors: "Авто з таким айді не знайдено",
      });
    }
  } catch (e) {
    res.json({
      success: false,
      data: null,
      errors: "Авто з таким айді не знайдено",
    });
  }
};
