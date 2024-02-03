// socketController.ts

import { Server, Socket } from "socket.io";

let socketIO: Server;

// Configure CORS for Socket.IO
const ioOptions = {
  cors: {
    origin: "http://localhost:3000", // replace with the actual origin of your frontend
    methods: ["GET", "POST"],
  },
};

export const setupSocket = (io: Server) => {
  socketIO = io;
  io.on("connection", (socket: Socket) => {
    console.log("Client connected");

    // You can add more logic here for handling socket connections

    // Example: Send a welcome message to the connected client
    socket.emit("message", "Welcome to the real-time dashboard!");

    // Notify connected clients about data updates with a message
    const intervalId = setInterval(() => {
      socketIO.emit("message", "Data has been updated"); // Notify clients about data updates with a message
    }, 5000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)

    // Stop the interval when the client disconnects
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(intervalId);
    });
  });
};

export const sendSocketMessage = (message: string) => {
  if (socketIO) {
    socketIO.emit("message", message); // Sending a message to all connected clients on the 'message' channel
  } else {
    console.error("SocketIO not initialized");
  }
};
