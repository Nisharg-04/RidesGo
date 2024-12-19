const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { getCoordinates } = require("../controllers/maps.controller");
const { query } = require("express-validator");
const { getDistanceTime } = require("../controllers/maps.controller");
const mapsService = require("../services/maps.service");
const {
  getAutoCompleteSuggestions,
} = require("../controllers/maps.controller");

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

router.get("/get-captains", async (req, res) => {
  const { lat, lng, radius } = req.query;

  // Parse and validate parameters
  const parsedLat = parseFloat(lat);
  const parsedLng = parseFloat(lng);
  const parsedRadius = parseFloat(radius);

  if (isNaN(parsedLat) || isNaN(parsedLng) || isNaN(parsedRadius)) {
    return res.status(400).json({
      error:
        "Invalid input parameters. 'lat', 'lng', and 'radius' must be numbers.",
    });
  }

  try {
    const captains = await mapsService.getCaptainsInRadius(
      parsedLat,
      parsedLng,
      parsedRadius
    );
    res.json(captains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
