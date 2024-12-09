const { Server } = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");
let io;

const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;
      console.log(`User ${userId} joined as ${userType}`);
      if (userType === "user") {
        const user = await userModel.findById(userId);
        user.socketId = socket.id;
        await user.save();
      } else if (userType === "captain") {
        const captain = await captainModel.findById(userId);
        captain.socketId = socket.id;
        await captain.save();
      }
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};

const sendMessageToSocketId = (socketId, event, message) => {
  if (io) {
    io.to(socketId).emit(event, message);
  } else {
    console.error("Socket.io not initialized.");
  }
};

module.exports = {
  initializeSocket,
  sendMessageToSocketId,
};
