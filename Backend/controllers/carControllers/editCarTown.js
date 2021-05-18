const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { town } = req.body;

    await Car.updateOne({ _id: id }, { $set: { town: town } });

    res.status(200).end();
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "changeCarTown",
      errors: e.message,
    });
  }
};
