let stockPrice = 100;

setInterval(() => {
  stockPrice += (Math.random() * 2 - 1); // Simulate price fluctuation
}, 5000);

export async function GET() {
  return new Response(JSON.stringify({ price: stockPrice }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
