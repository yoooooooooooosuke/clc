import { Klee_One, Noto_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header, Header1 } from "./components/header/page";

const inter = Klee_One({ subsets: ["latin"], weight : '400' });

export const metadata = {
  title: "Gaw工房",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
