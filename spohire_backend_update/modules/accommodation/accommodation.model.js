const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  timeZone: {
    type: String,
    required: true,
  },
  checkInTime: {
    type: String,
    required: true,
  },
  checkOutTime: {
    type: String,
    required: true,
  },
  blockDaysBeforeBooking: {
    type: Number,
    required: true,
  },
  blockDaysAfterBooking: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
  },
  groupAccommodations: {
    type: Boolean,
    default: false,
  },
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
