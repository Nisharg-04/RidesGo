const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { createRide } = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create-ride",
  [
    body("pickup").notEmpty().withMessage("Origin is required"),
    body("destination").notEmpty().withMessage("Destination is required"),
    body("vehicleType")
      .isString()
      .isIn(["auto", "car", "motorcycle"])
      .withMessage("Vehicle Type is required"),
  ],
  authMiddleware.authUser,
  createRide
);

module.exports = router;
