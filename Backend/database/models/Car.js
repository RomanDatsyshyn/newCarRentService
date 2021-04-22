const mongoose = require("mongoose");
const { Schema } = mongoose;

const carScheme = new Schema({
  town: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  segment: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transmission: {
    type: Number,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rentcar_orders",
    },
  ],
});

carScheme.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("rent_cars", carScheme);
