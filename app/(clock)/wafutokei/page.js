'use client'
import Link from 'next/link';
import { Klee_One, Noto_Sans_JP } from "next/font/google";
import { Wafu } from '@/app/components/wafu/page';
import { Footer } from '@/app/components/footer/page';
import CopytoClipBoard from '@/app/components/button/page';
import { useState,useEffect } from 'react';

const inter = Klee_One({ subsets: ["latin"], weight : '400' })

export default function Home() {
  return(
    <main className={inter.className + ' flex min-h-screen flex-col items-center w-full justify-between'}>
      <div className='pt-12 w-3/5'>
        <div className='p-12'>
          <div className='max-w-fit px-4 py-1.5 text-3xl bg-black text-white'>
            <span className=''>配信用和風時計</span>
          </div>
          <div>時計をクリックでOBSブラウザ機能用のページに飛びます。</div>
          <div>最適設定⇒幅:240 高さ:144</div>
        </div>
        <div className='grid grid-cols-3 bg-green-500 p-12 gap-12 justify-items-center'>
          <Block direction={'topleft'} />
          <Block direction={'top'}/>
          <Block direction={'topright'}/>
          <Block direction={'right'}/>
          <Block direction={'mid'}/>
          <Block direction={'left'}/>
          <Block direction={'bottomleft'}/>
          <Block direction={'bottom'}/>
          <Block direction={'bottomright'}/>
        </div>
      </div>
      <Footer />
    </main>
  )
}

const Block = ({direction}) =>{
  const [host,setHostname] = useState('')
  const link = '/wafutokei/' + direction
  useEffect(() => {
    setHostname(window.location.hostname)
  }, [])
  return(
    <div className='flex flex-col hover:bg-green-400 p-4 rounded-lg'>
      <Link href = {link}>
        <Wafu direction={direction}/>
      </Link>
      <CopytoClipBoard  url={host + link}/>
    </div>
  )
}
