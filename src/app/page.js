import BotController from '../components/BotController';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome to the Trading Bot</h1>
        <p className="text-lg mt-2 text-gray-600">Control the bot, track trades, and monitor profit/loss in real-time.</p>
      </header>
      <BotController />
    </main>
  );
}
