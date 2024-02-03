import React from "react";
import "./App.scss";
import CoinList from "./components/coinList";

function App() {
  return (
    <div className="App">
      <h1>Your Coins Dashboard!</h1>
      <CoinList />
    </div>
  );
}

export default App;
