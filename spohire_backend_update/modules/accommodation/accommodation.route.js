const express = require('express');
const router = express.Router();
const accommodationController = require('../controllers/accommodationController');
router.get('/accommodations', accommodationController.getAllAccommodations);

// Define a route for getting a specific accommodation by ID
router.get('/accommodations/:id', accommodationController.getAccommodationById);

// Define a route for creating a new accommodation
router.post('/accommodations', accommodationController.createAccommodation);

// Define a route for editing an existing accommodation
router.put('/accommodations/:id', accommodationController.editAccommodation);

// Define a route for deleting an existing accommodation
router.delete('/accommodations/:id', accommodationController.deleteAccommodation);

module.exports = router;
