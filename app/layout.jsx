import { notojp, baloo } from '../fonts';
import { Suspense } from "react";
import Analytics from '../utils/Analytics';
import "@/styles/globals.css";


const siteName= 'ONNPU|ト音記号とへ音記号マスターへの近道！ピアノ初心者のためのブラウザゲーム';
const description = '音符を読むのが苦手？ ト音記号とへ音記号を楽しく覚えられるブラウザゲームで、楽譜をスラスラ読めるようになりましょう!';
const url = 'https://onnpu.com';


export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    // site: '@サイト用アカウントのTwitterID',
    // creator: '@作者のTwitterID',
  },
}

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
