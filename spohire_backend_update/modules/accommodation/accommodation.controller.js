const Accommodation = require("../models/accommodation");

const createAccommodation = async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    const savedAccommodation = await newAccommodation.save();
    res.status(201).json(savedAccommodation);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const editAccommodation = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ error: "Accommodation ID is required for editing." });
    }

    // Find the accommodation by ID
    const existingAccommodation = await Accommodation.findById(id);

    // Check if the accommodation exists
    if (!existingAccommodation) {
      return res.status(404).json({ error: "Accommodation not found." });
    }

    // Update the accommodation with the new data
    Object.assign(existingAccommodation, req.body);
    const updatedAccommodation = await existingAccommodation.save();

    res.status(200).json(updatedAccommodation);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const deleteAccommodation = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ error: "Accommodation ID is required for deletion." });
    }

    // Find and delete the accommodation by ID
    const deletedAccommodation = await Accommodation.findByIdAndDelete(id);

    // Check if the accommodation exists
    if (!deletedAccommodation) {
      return res.status(404).json({ error: "Accommodation not found." });
    }

    res.status(200).json({ message: "Accommodation deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json(accommodations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAccommodationById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res
        .status(400)
        .json({ error: "Accommodation ID is required for retrieval." });
    }

    // Find the accommodation by ID
    const accommodation = await Accommodation.findById(id);

    // Check if the accommodation exists
    if (!accommodation) {
      return res.status(404).json({ error: "Accommodation not found." });
    }

    res.status(200).json(accommodation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation,
  editAccommodation,
  deleteAccommodation,
};
