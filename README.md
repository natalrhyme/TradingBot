## Overview
This application is a basic trading bot built with Next.js (version 13+) and Node.js, designed to simulate stock trading on a hypothetical stock market. The bot makes buy/sell decisions based on predefined rules and monitors stock prices using mock data from API routes. The frontend provides a simple interface where users can control the bot and view its performance.

## Features
Simulates stock price tracking using mock data.
Implements simple trading strategies (e.g., buy low, sell high).
Tracks the bot’s balance, positions, profit/loss.
Provides a report summarizing trades and the final balance.
Interactive UI built using Next.js with Tailwind CSS for a modern, responsive design.

## How to Run the Application
1. Install Dependencies
Before running the application, make sure you have Node.js installed. You can download Node.js from here.

Install dependencies by running:

```bash
npm install
```
2. Run the Development Server
To start the Next.js development server, run:

```bash
npm run dev
```
This will start the application at http://localhost:3000.

3. API Endpoints
Start Bot: GET /api/start-bot
Starts the trading bot, allowing it to monitor stock prices and execute trades.

Stop Bot: GET /api/stop-bot
Stops the trading bot and returns a summary report of the trades and current balance.

Mock Stock Prices: GET /api/stock-price
Simulates real-time stock prices with mock data.

4. UI Overview
Trading Bot Controller:
The bot controller provides buttons to start or stop the bot. It displays the bot’s current status (e.g., Running or Stopped) and a profit/loss report when the bot is stopped.

Start Bot: Initiates the trading process.
Stop Bot: Stops the bot and shows a summary report of trades and final balance.
