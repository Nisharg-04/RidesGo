const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model");
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

    res.status(200).json({ ride });
    const distTime = await mapService.getDistanceTime(pickup, destination);
    const pickupCoordinates = await mapService.getAddressCoordinates(pickup);
    // console.log(pickupCoordinates);
    const captainInRadius = await mapService.getCaptainsInRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      1
    );
    ride.otp = "";
    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("userId");
    const rideRes = {
      ride: rideWithUser,
      time: distTime.duration.text,
      distance: distTime.distance.text,
    };
    console.log(rideRes);
    captainInRadius.map(async (captain) => {
      sendMessageToSocketId(captain.socketId, "new-ride", rideRes);
    });
    // console.log(captainInRadius);
  } catch (error) {
    console.log(error);
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

module.exports.confirmRide = async (req, res, next) => {
  // console.log("confirm ride");
  // console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId, captainId } = req.body;
  // console.log(rideId);
  if (!rideId) {
    return res.status(400).json({ message: "Ride ID is required" });
  }

  try {
    const ride = await rideService.confirmRides(rideId, captainId);
  
    sendMessageToSocketId(ride.userId.socketId, "ride-confirmed", ride);

    return res.status(200).json({ ride });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports.startRide = async (req, res, next) => {
  const errors = validationResult(req);
 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId, otp } = req.body;
  console.log("start ride");
  if (!rideId || !otp) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    console.log("start ride");
    const ride = await rideService.startRide(rideId, otp);
    console.log(ride);
    sendMessageToSocketId(ride.userId.socketId, "ride-started", ride);
    // sendMessageToSocketId(ride.userId.socketId, "ride-confirmed", ride);



    return res.status(200).json({ ride });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
