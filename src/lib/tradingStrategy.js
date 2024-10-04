import axios from 'axios';
import { recordTrade } from './profitLossTracker';

let currentPosition = 0;  // 0 = no position, 1 = bought
let balance = 10000;
let shares = 0;
let tradingInterval = null;

function executeTrade(price) {
  const buyThreshold = 98;
  const sellThreshold = 102;

  if (currentPosition === 0 && price < buyThreshold) {
    // Buy logic
    shares = Math.floor(balance / price);
    balance -= shares * price;
    currentPosition = 1;
    recordTrade('buy', price, shares);
    console.log(`Bought ${shares} shares at $${price}`);
  } else if (currentPosition === 1 && price > sellThreshold) {
    // Sell logic
    balance += shares * price;
    recordTrade('sell', price, shares);
    console.log(`Sold ${shares} shares at $${price}`);
    currentPosition = 0;
    shares = 0;
  }
}

// Start the trading bot
export function startBot() {
  tradingInterval = setInterval(async () => {
    const { data } = await axios.get('http://localhost:3000/api/stock-price');
    executeTrade(data.price);
  }, 5000);

  return tradingInterval;
}

// Stop the trading bot
export function stopBot() {
  if (tradingInterval) {
    clearInterval(tradingInterval);
    tradingInterval = null;
  }
}
