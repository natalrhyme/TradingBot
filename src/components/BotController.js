'use client';

import { useState } from 'react';
import axios from 'axios';

const BotController = () => {
  const [botStatus, setBotStatus] = useState('stopped');
  const [report, setReport] = useState(null);

  const startBot = async () => {
    try {
      await axios.get('/api/start-bot');
      setBotStatus('running');
    } catch (error) {
      console.error('Error starting the bot:', error);
    }
  };

  const stopBot = async () => {
    try {
      const { data } = await axios.get('/api/stop-bot');
      setBotStatus('stopped');
      setReport(data.report);
    } catch (error) {
      console.error('Error stopping the bot:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Trading Bot Controller</h1>
      
      <p className="text-xl mb-4">
        Status: 
        <span
          className={`ml-2 px-2 py-1 rounded ${
            botStatus === 'running' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {botStatus}
        </span>
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={startBot}
          disabled={botStatus === 'running'}
          className={`px-4 py-2 font-semibold rounded-lg ${
            botStatus === 'running'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Start Bot
        </button>

        <button
          onClick={stopBot}
          disabled={botStatus === 'stopped'}
          className={`px-4 py-2 font-semibold rounded-lg ${
            botStatus === 'stopped'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          Stop Bot
        </button>
      </div>

      {report && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Profit/Loss Report</h2>
          <p className="text-lg mb-4">Balance: <span className="font-semibold">${report.balance.toFixed(2)}</span></p>
          <ul className="space-y-2">
            {report.trades.map((trade, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg shadow-sm ${
                  trade.type === 'buy' ? 'bg-blue-100' : 'bg-green-100'
                }`}
              >
                {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.shares} shares at $
                {trade.price.toFixed(2)} on {new Date(trade.date).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BotController;
