import { stopBot } from '../../../lib/tradingStrategy';
import { generateReport } from '../../../lib/profitLossTracker';

export async function GET() {
  stopBot();
  const report = generateReport();
  return new Response(JSON.stringify({ message: "Trading bot stopped", report }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
