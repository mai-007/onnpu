import { Noto_Sans_JP } from 'next/font/google'
import localFont from 'next/font/local'

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

// カスタムローカルフォントを定義する
const baloo = localFont({
  src: './fonts/Baloo-Regular.ttf',
  variable: "--font-baloo",
  display: 'swap',
})

export { notojp, baloo }
