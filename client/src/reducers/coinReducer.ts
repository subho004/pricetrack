// src/reducers/coinReducer.ts

interface Coin {
  symbol: string;
  price: string;
}

interface CoinState {
  coins: Coin[];
  realTimeData?: any; // Add the realTimeData property
  // Add other properties as needed
}

// Define action types
const FETCH_COINS = "FETCH_COINS";
const REAL_TIME_UPDATE = "REAL_TIME_UPDATE";

// Define action creators
export const fetchCoins = (coins: Coin[]) => ({
  type: FETCH_COINS,
  payload: coins,
});

export const realTimeUpdate = (data: any) => ({
  type: REAL_TIME_UPDATE,
  payload: data,
});

// Update the reducer
const coinReducer = (state: CoinState = { coins: [] }, action: any) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case REAL_TIME_UPDATE:
      // Update state with real-time data
      return {
        ...state,
        realTimeData: action.payload,
      };
    default:
      return state;
  }
};

export interface RootState {
  coinReducer: CoinState;
  // Add other slices of state as needed for other reducers
}

export default coinReducer;
