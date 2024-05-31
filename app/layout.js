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
      <body className={`${montserrat.className} `}>
        {children}

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.CLICKINY_EMBED_CONFIG = {
             id: "9cdf8ed2-a58d-4227-a335-0f3971d140ba"
            }
          `,
          }}
        />
        <Script
          src="https://app.clickiny.com/js/clickiny.button.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
