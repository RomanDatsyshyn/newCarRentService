const Order = require("../../database/models/Order");

module.exports = async (req, res) => {
  try {
    const { order_id } = req.params;
    const { id } = res.locals;

    const order = await Order.findById(order_id);

    if (order.user != id) {
      res.status(401).json({
        success: false,
        data: null,
        errors: "В доступі відмовленно",
      });
    }

    if (order) {
      res.json({
        success: true,
        data: order.toJSON(),
        errors: null,
      });
    } else {
      res.json({
        success: false,
        data: null,
        errors: "Такого замовлення не знайдено",
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "GetOrderById",
      errors: e.message,
    });
  }
};
