let tradeHistory = [];
let balance = 10000;

export function recordTrade(type, price, shares) {
  tradeHistory.push({
    type,
    price,
    shares,
    date: new Date(),
  });
}

export function generateReport() {
  return {
    balance,
    trades: tradeHistory,
  };
}
