const User = require("../../database/models/User");
const Order = require("../../database/models/Order");

module.exports = async (req, res) => {
  try {
    const { id } = res.locals;
    const { order_id } = req.params;

    const user = await User.findById(id);
    const index = user.orders.indexOf(order_id);
    user.orders.splice(index, 1);

    await user.save();

    await Order.deleteOne({ _id: order_id });

    res.status(204).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || "deleteOrder",
    });
  }
};
