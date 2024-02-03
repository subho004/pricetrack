// src/sockets/socket.ts

import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { realTimeUpdate } from "../reducers/coinReducer";
import { getCoins } from "../utils/api";

const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("http://localhost:8000");

    // Connect to the WebSocket server
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen for data updates from the server
    socket.on("message", async (message) => {
      if (message === "Data has been updated") {
        //console.log("Received data updated event");

        try {
          // Fetch updated data using the getCoins function from api.ts
          const updatedData = await getCoins();
          console.log("updated", updatedData);
          const extractedData = updatedData
            .flatMap((array) => array)
            .map(({ symbol, price }) => ({ symbol, price }));

          //console.log("extractedData", extractedData);
          // Dispatch the realTimeUpdate action with the updated data
          dispatch(realTimeUpdate(extractedData));
        } catch (error) {
          console.error("Error fetching updated data:", error);
        }
      }
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, [dispatch]);

  return null; // This component doesn't render anything
};

export default useSocket;
