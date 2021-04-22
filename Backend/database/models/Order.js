const mongoose = require("mongoose");
const { Schema } = mongoose;

const userScheme = new Schema({
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rentcar_users",
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rent_cars",
  },
  price: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    minlength: 5,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

userScheme.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("rentcar_orders", userScheme);
