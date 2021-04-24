const Car = require("../../database/models/Car");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { segment } = req.body;

    await Car.updateOne({ _id: id }, { $set: { segment: segment } });

    res.status(200).end();
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "changeCarSegment",
      errors: e.message,
    });
  }
};
