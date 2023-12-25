const express = require("express");
const router = express.Router();
const bookingController = require("./booking.controller"); // Import the controller

router.post("/addBookings", bookingController.createBooking);
router.put("/bookings/:id", bookingController.editBooking);
router.get('/bookings', bookingController.getAllBookings);

module.exports = router;
