import { notojp, baloo } from '../fonts';
import { Suspense } from "react";
import Analytics from '../utils/Analytics';
import "@/styles/globals.css";



export const metadata = {
  title: "ONNPU|ト音記号とへ音記号マスターへの近道！ピアノ初心者必見のブラウザゲーム",
  description: "音符を読むのが苦手？ ト音記号とへ音記号を楽しく覚えられるブラウザゲームで、楽譜をスラスラ読めるようになりましょう!"
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
