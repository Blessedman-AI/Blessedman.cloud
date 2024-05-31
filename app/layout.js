import { Montserrat } from "next/font/google";

import "./globals.css";

import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blessedman's Portfolio",
  description: "Some of my best work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>{children}</body>
    </html>
  );
}
