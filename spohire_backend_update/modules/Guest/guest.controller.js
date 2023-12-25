// guestController.js

const Guest = require("../models/guest");

const addGuest = async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    const savedGuest = await newGuest.save();
    res.status(201).json(savedGuest);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const editGuest = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ error: "Guest ID is required for editing." });
    }

    // Find the guest by ID
    const existingGuest = await Guest.findById(id);

    // Check if the guest exists
    if (!existingGuest) {
      return res.status(404).json({ error: "Guest not found." });
    }

    // Update the guest with the new data
    Object.assign(existingGuest, req.body);
    const updatedGuest = await existingGuest.save();

    res.status(200).json(updatedGuest);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const deleteGuest = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ error: "Guest ID is required for deletion." });
    }

    // Find and delete the guest by ID
    const deletedGuest = await Guest.findByIdAndDelete(id);

    // Check if the guest exists
    if (!deletedGuest) {
      return res.status(404).json({ error: "Guest not found." });
    }

    res.status(200).json({ message: "Guest deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addGuest,
  editGuest,
  deleteGuest,
  getAllGuests,
};
