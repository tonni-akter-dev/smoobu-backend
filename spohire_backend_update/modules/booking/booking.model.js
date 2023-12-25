const mongoose = require("mongoose");
const mealOptions = ["breakfast", "lunch", "dinner"];

const bookingSchema = new mongoose.Schema(
  {
    portal: {
      type: String,
      required: true,
    },
    accommodation: {
      type: String,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    howManyAdults: {
      type: Number,
      required: false,
    },
    howManyChildrens: {
      type: Number,
      required: false,
    },
    basePrice: {  // Changed from Baseprice to basePrice
      type: Number,
      required: false,
    },
    cleaningFee: {
      type: Number,
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    prepayment: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    checkin: {
      type: String,
      required: true,
    },
    checkout: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true, 
    },
    meals: {
      type: [{
        type: String,
        enum: mealOptions,
      }],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);  // Changed from Player to Booking
module.exports = Booking;
