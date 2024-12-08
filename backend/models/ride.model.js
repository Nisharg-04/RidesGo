const mongoose = require("mongoose");
const RideSchema = new mongoose.Schema(
  {
    captainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Captain",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickup: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
    },
    fare: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "ongoing", "completed", "canceled"],
      default: "pending",
    },
    paymentId: {
      type: String,
    },
    orderId: {
      type: String,
    },
    signature: {
      type: String,
    },
    otp: {
      type: String,
      selected: false,
      required: true
    },
  },
  { timestamps: true }
);
const RideModel = mongoose.model("ride", RideSchema);
module.exports = RideModel;
