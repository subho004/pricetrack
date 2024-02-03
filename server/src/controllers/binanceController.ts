// binanceController.ts

import { Request, Response } from "express";
import { getPrices } from "../services/binanceService";
import { sendSocketMessage } from "../sockets/socketController";

let lastFetchedData: any = null;

export const getBinancePrices = async (req: Request, res: Response) => {
  try {
    const prices = await getPrices();

    // Check if the data has changed since the last fetch
    if (JSON.stringify(prices) !== JSON.stringify(lastFetchedData)) {
      // If changed, update lastFetchedData and notify connected clients with a message
      lastFetchedData = prices;
      sendSocketMessage("Data has been updated"); // Send a message to connected clients
    }

    res.status(200).json(prices);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
