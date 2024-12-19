const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const { createRide, getFare,startRide } = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { confirmRide } = require("../controllers/ride.controller");
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

router.get(
  "/get-fare",
  [
    query("pickup").notEmpty().withMessage("Origin is required"),
    query("destination").notEmpty().withMessage("Destination is required"),
  ],
  authMiddleware.authUser,
  getFare
);

router.post("/confirm", [
  body("rideId").notEmpty().withMessage("Ride ID is required"),
  confirmRide,
]);

router.post(
  "/start-ride",
  [
    body("rideId").notEmpty().withMessage("Ride ID is required"),
    body("otp").notEmpty().withMessage("OTP is required"),
  ],
  startRide
);
module.exports = router;
