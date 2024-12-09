const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
module.exports.createRide = async (req, res, next) => {
  // console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;

  if (!pickup || !destination || !vehicleType) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const ride = await rideService.createRide({
      pickup,
      destination,
      vehicleType,
      userId: req.user._id,
    });
    return res.status(200).json({ ride });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports.getFare = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  if (!pickup || !destination) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json({ fare });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
