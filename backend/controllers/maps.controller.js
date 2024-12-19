const getAddressCoordinates =
  require("../services/maps.service").getAddressCoordinates;
const getDistanceTime = require("../services/maps.service").getDistanceTime;
const { validationResult } = require("express-validator");
const getAutoCompleteSuggestions =
  require("../services/maps.service").getAutoCompleteSuggestions;

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await getAddressCoordinates(address);
    res.status(200).json({ coordinates });
  } catch (error) {
    res.status(404).json({ message: "Coordinates Not Found" });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { origin, destination } = req.query;
  try {
    const distanceTime = await getDistanceTime(origin, destination);
    res.status(200).json({ distanceTime });
  } catch (error) {
    res.status(404).json({ message: "Distance and Time Not Found" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input } = req.query;
  try {
    const suggestions = await getAutoCompleteSuggestions(input);
    res.status(200).json({ suggestions });
  } catch (error) {
    res.status(404).json({ message: "Suggestions Not Found" });
  }
};



