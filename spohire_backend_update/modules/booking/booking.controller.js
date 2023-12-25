const Booking = require("./booking.model"); // Import your Mongoose model

const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

// edit booking
const editBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ error: "Booking ID is required for editing." });
    }
    const existingBooking = await Booking.findById(id);
    if (!existingBooking) {
      return res.status(404).json({ error: "Booking not found." });
    }
    Object.assign(existingBooking, req.body);
    const updatedBooking = await existingBooking.save();

    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
const getAllBookings = async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {
  createBooking,
  editBooking,
  getAllBookings
};
