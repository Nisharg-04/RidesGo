const rideModel = require("../models/ride.model");
const mapsService = require("../services/maps.service");
async function getFare(pickup, destination) {
  if (pickup == destination) {
    throw new Error("Pickup and Destination are reqquired");
  }
  const distanceTime = await mapsService.getDistanceTime(pickup, destination);
  const baseFare = {
    auto: 20,
    motorcycle: 15,
    car: 30,
  };

  const perKmRate = {
    auto: 10,
    motorcycle: 8,
    car: 12,
  };

  const perMinuteRate = {
    auto: 1,
    motorcycle: 0.8,
    car: 1.5,
  };

  const fare = {
    auto:
      baseFare.auto +
      (distanceTime.distance.value / 1000) * perKmRate.auto +
      (distanceTime.duration.value / 60) * perMinuteRate.auto,
    motorcycle:
      baseFare.motorcycle +
      (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
      (distanceTime.duration.value / 60) * perMinuteRate.motorcycle,
    car:
      baseFare.car +
      (distanceTime.distance.value / 1000) * perKmRate.car +
      (distanceTime.duration.value / 60) * perMinuteRate.car,
  };

  return fare;
}

function getOtp() {
  return Math.floor(1000 + Math.random() * 9000);
}

module.exports.createRide = async ({
  pickup,
  destination,
  vehicleType,
  userId,
}) => {
  if (!pickup || !destination || !vehicleType || !userId) {
    throw new Error("All fields are required");
  }
  try {
    const fare = await getFare(pickup, destination);

    const ride = new rideModel({
      pickup,
      destination,
      fare: fare[vehicleType],
      userId,
      otp: getOtp(),
    });
    await ride.save();
    return ride;
  } catch (error) {
    throw new Error(error.message);
  }
};
