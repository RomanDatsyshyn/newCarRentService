const Order = require("../../database/models/Order");

module.exports = async (req, res) => {
  try {
    const { id } = res.locals;

    const orders = await Order.find({});
    const userOrders = [];

    orders.map((o) => {
      if (o.user == id) {
        userOrders.push(o);
      }
    });

    res.status(200).json({
      success: true,
      data: userOrders.map((o) => o.toJSON()),
      errors: null,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "GetOrderById",
      errors: e.message,
    });
  }
};
