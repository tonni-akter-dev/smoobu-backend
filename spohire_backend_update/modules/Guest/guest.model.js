const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Assuming email should be unique
    },
    phone: {
      type: String,
    },
    street: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    city: {
      type: String,
    },
    stateProvince: {
      type: String,
    },
    country: {
      type: String,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
