// src/utils/api.ts

import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Replace with your actual API base URL

export const getCoins = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/prices`);
    console.log("response", response.data);
    return response.data; // Assuming the API returns an array of coins
  } catch (error) {
    console.error("Error fetching coins:", error);
    throw error;
  }
};

// You can add more API-related functions here as needed
