import './globals.css';

export const metadata = {
  title: 'Trading Bot',
  description: 'A trading bot built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
