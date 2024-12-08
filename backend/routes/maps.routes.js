const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { getCoordinates } = require("../controllers/maps.controller");
const { query } = require("express-validator");
const { getDistanceTime } = require("../controllers/maps.controller");
const { getAutoCompleteSuggestions } = require("../controllers/maps.controller");

router.get(
  "/get-coordinates",
  query("address").notEmpty().withMessage("Address is required"),
  authMiddleware.authUser,
  getCoordinates
);

router.get(
  "/get-distance-time",
  query("origin").notEmpty().withMessage("Origin is required"),
  query("destination").notEmpty().withMessage("Destination is required"),
  authMiddleware.authUser,
  getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input").notEmpty().withMessage("Input is required"),
  
  getAutoCompleteSuggestions
);

module.exports = router;
