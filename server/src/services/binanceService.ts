// binanceService.ts

import axios from "axios";

const BASE_URL = "https://api.binance.com/api/v3"; // Binance API base URL

export const getPrices = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/ticker/price`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching prices from Binance: ${error.message}`);
  }
};
