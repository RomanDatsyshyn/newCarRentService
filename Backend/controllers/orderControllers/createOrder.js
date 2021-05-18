const Car = require("../../database/models/Car");
const User = require("../../database/models/User");
const Order = require("../../database/models/Order");

module.exports = async (req, res) => {
  try {
    const { fromDate, toDate, price, content, carId } = req.body;
    const { id } = res.locals;

    const user = await User.findById(id);
    const car = await Car.findById(carId);

    const order = new Order({
      fromDate: fromDate,
      toDate: toDate,
      user: id,
      car: car,
      price: price,
      content: content,
      isCompleted: false,
    });

    const savedOrder = await order.save();

    user.orders = user.orders.concat(savedOrder._id);
    await user.save();

    car.orders = car.orders.concat(savedOrder._id);
    await car.save();

    res.status(201).end();
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "CreateOrder",
      errors: e.message,
    });
  }
};
