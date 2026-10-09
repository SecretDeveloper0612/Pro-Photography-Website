import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Pro Photography | Premium Studio",
  description: "Capturing extraordinary moments through timeless imagery, creative vision, and the art of storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
