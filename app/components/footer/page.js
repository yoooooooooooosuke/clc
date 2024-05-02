import Image from 'next/image'
import Link from 'next/link'
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const inter = Noto_Sans_JP({ subsets: ["latin"], weight : '400' });


export const Footer = () =>{
  return(
    <div className={inter.className +" py-12 flex w-3/5 justify-around"}>
      <Link href={'/'} className='text-2xl p-4'>
        Gaw工房
      </Link>
      <div className='p-4 flex gap-4 items-center'>
        <a href="https://x.com/gawgaw_game">
          <Image
            src = "/x_logo.svg"
            alt = "X"
            width = {20}
            height = {20}
          />
        </a>
        <a href="https://www.youtube.com/@gawgawgame">
          <Image
            src = "/yt_icon_mono_light.png"
            alt = "youtube logo"
            width = {24}
            height = {24}
          />
        </a>
      </div>
    </div>
  )
}