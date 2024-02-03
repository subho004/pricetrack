# Binance Price Tracker Project
## Introduction
This project allows users to track cryptocurrency prices using the Binance API. It consists of two main components - the server and the client. The server periodically calls the Binance API to check for changes in data. If any changes are detected, it informs the client through a socket connection. The client, upon receiving the notification, fetches updated data from the Binance API.

## Project Structure
The project is organized into two folders:

### 1. Server
The server folder contains the backend logic responsible for interacting with the Binance API and managing the socket connection with the client.

#### Usage
- Ensure you have Node.js installed.
- Install dependencies: npm install
- Configure Binance API credentials in config.js
- Start the server: npm start
### 2. Client
The client folder houses the frontend application that displays the cryptocurrency price data. It communicates with the server through a socket connection to receive real-time updates.

### Usage
- Ensure you have Node.js installed.
- Install dependencies: npm install
- Start the client: npm start


### Usage Flow
- The server periodically calls the Binance API to check for changes.
- If changes are detected, the server sends a notification to the client through a socket connection.
- The client, upon receiving the notification, fetches updated data from the Binance API.
- The frontend is then updated with the latest cryptocurrency price information.

### Dependencies
- Node.js
- Binance API (npm package)
- Socket.io (for real-time communication)
- 
## Contribution
Contributions are welcome! If you find a bug or have an enhancement in mind, please open an issue or submit a pull request.

