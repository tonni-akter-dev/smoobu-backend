// guestRoutes.js

const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

router.post("/guests", guestController.addGuest);
router.put("/guests/:id", guestController.editGuest);
router.delete("/guests/:id", guestController.deleteGuest);
router.get("/guests", guestController.getAllGuests);

module.exports = router;
