import { notojp, baloo } from '../fonts';
import { Suspense } from "react";
import Analytics from '../utils/Analytics';
import "@/styles/globals.css";



export const metadata = {
  title: "ONNPU|音階・楽譜をやさしく学べるサイト",
  description: "未就学児〜大人まで簡単に音階・楽譜の読み方が学べます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notojp.variable} ${baloo.variable}`}>
      <Suspense>
        <Analytics/>
      </Suspense>
        {children}
      </body>
    </html>
  );
}
