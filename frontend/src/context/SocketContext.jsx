import React, { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// Create the SocketContext
export const SocketContext = createContext();

// Custom hook to use the SocketContext
const socket = io(`${import.meta.env.VITE_BASE_URL}`); // Replace with your server URL
// SocketProvider component
const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);
  useEffect(() => {
    // Initialize Socket.IO client
    socketRef.current = io(`${import.meta.env.VITE_BASE_URL}`, {
      // Adjust the URL and options as needed
      transports: ["websocket"],
    });

    // Connection established
    socketRef.current.on("connect", () => {
      console.log(
        "Connected to Socket.IO server with ID:",
        socketRef.current.id
      );
    });

    // Handle disconnection
    socketRef.current.on("disconnect", (reason) => {
      console.log("Disconnected from Socket.IO server:", reason);
    });
    socketRef.current.on("ride-confirmed", () => {
      console.log("Ride Confirmed:");
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Function to send a message to a specific event
  const sendMessage = (eventName, message) => {
    if (socketRef.current) {
      // console.log(socketRef.current);
      socketRef.current.emit(eventName, message);
    } else {
      console.error("Socket not initialized.");
    }
  };

  // Function to receive messages from a specific event
  const receiveMessage = (eventName, callback) => {
    if (socketRef.current) {
      socketRef.current.on(eventName, callback);
    } else {
      console.error("Socket not initialized.");
    }
  };

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
