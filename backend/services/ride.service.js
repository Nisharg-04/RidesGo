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
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
        (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
  };

  return fare;
}
module.exports.getFare = getFare;

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
module.exports.confirmRides = async (rideId, captainId) => {
  try {
    // Find captains within the radius
    await rideModel.findOneAndUpdate(
      {
        _id: rideId,
      },
      {
        status: "accepted",
        captainId: captainId,
      }
    );
    // console.log("ride confirmed");
    const ride = await rideModel
      .findOne({ _id: rideId })
      .populate("userId")
      .populate("captainId");
    console.log(ride);
    return ride;
  } catch (error) {
    console.log("Error fetching captains in radius:", error);
    throw new Error("Error fetching captains in radius");
  }
};

module.exports.startRide = async (rideId, otp) => {
  try {
    await rideModel.findOneAndUpdate(
      { _id: rideId, status: "accepted" },
      {
        status: "ongoing",
      }
    );
    const ride = await rideModel
      .findOne({ _id: rideId })
      .populate("userId")
      .populate("captainId");
    console.log(ride);
    if (ride.otp == otp) {
      return ride;
    } else {
      throw new Error("Invalid OTP");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
