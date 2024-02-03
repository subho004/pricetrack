// src/components/CoinList.tsx

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

interface Coin {
  symbol: string;
  price: string;
}

const CoinList = () => {
  const [coinData, setCoinData] = useState<Coin[]>([]);

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
          // Fetch updated data
          const response = await fetch("http://localhost:8000/api/prices");
          const updatedData: Coin[] = await response.json();

          // Extract { symbol, price } objects
          const extractedData = updatedData.flatMap(({ symbol, price }) => ({
            symbol,
            price,
          }));

          //console.log("extractedData", extractedData);

          // Update the state with the extracted data
          setCoinData(extractedData);
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
  }, []);

  return (
    <div className="coin-container">
      <h2>Coin List</h2>
      <div className="heading-container">
        <h3 className="heading">
          Coins<span className="gap">{"   "}</span> Price
        </h3>
      </div>
      <ul>
        {coinData.map(({ symbol, price }) => (
          <li key={symbol}>
            <strong className="symbol">{symbol}</strong>:
            <span className="price"> {price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
