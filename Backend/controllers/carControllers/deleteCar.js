const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    await Car.findByIdAndRemove(id);
    res.status(204).end();
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "deleteCar",
      errors: e.message,
    });
  }
};
