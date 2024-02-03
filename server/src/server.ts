import express from "express";
import http from "http";
import { Server as SocketIoServer } from "socket.io";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";
import { setupSocket } from "./sockets/socketController";
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Use cors middleware
app.use(cors());

// Create a Socket.IO server instance and pass the server instance
const io = new SocketIoServer(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your actual frontend origin
    methods: ["GET", "POST"],
  },
});

// Set up socket connection
setupSocket(io);

// Use API routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
