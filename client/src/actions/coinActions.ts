// src/actions/coinActions.ts

import { Dispatch } from "redux";
import { getCoins } from "../utils/api"; // Adjust the path based on your actual project structure

// Define action types
export const FETCH_COINS_REQUEST = "FETCH_COINS_REQUEST";
export const FETCH_COINS_SUCCESS = "FETCH_COINS_SUCCESS";
export const FETCH_COINS_FAILURE = "FETCH_COINS_FAILURE";

// Action creators
const fetchCoinsRequest = () => ({
  type: FETCH_COINS_REQUEST,
});

const fetchCoinsSuccess = (coins: any[]) => ({
  type: FETCH_COINS_SUCCESS,
  payload: coins,
});

const fetchCoinsFailure = (error: string) => ({
  type: FETCH_COINS_FAILURE,
  payload: error,
});

// Async action creator for fetching coins
export const fetchCoins = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCoinsRequest());

    try {
      const coins = await getCoins();
      dispatch(fetchCoinsSuccess(coins));
    } catch (error: any) {
      dispatch(fetchCoinsFailure(error.message || "Error fetching coins"));
    }
  };
};
