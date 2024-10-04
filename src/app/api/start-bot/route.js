import { startBot } from '../../../lib/tradingStrategy';

let tradingInterval = null;

export async function GET() {
  if (tradingInterval) {
    return new Response(JSON.stringify({ message: "Bot is already running" }), {
      status: 400,
    });
  }

  tradingInterval = startBot();
  return new Response(JSON.stringify({ message: "Trading bot started" }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
