import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blessedman's Portfolio",
  description: "Some of my best work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex lg:justify-center items-center `}
      >
        <main className="max-w-screen-2xl ">{children}</main>
      </body>
    </html>
  );
}
