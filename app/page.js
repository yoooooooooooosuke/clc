'use client'
import Link from 'next/link';
import { Footer } from './components/footer/page';
import { Header1 } from './components/header/page';
import { Wafu } from './components/wafu/page';

export default function Home() {

  return(
    <main className="flex min-h-screen flex-col items-center w-full justify-between">
      <Header1 />
      <Maindiv />
      <Footer />
    </main>
  )
}

const Maindiv = () => {
  return(
    <div className='flex flex-col h-full'>
      <div className=''>
        <div>
          公開中
        </div>
        <Link href='/wafutokei'>
          <div className='bg-white py-4 text-2xl self-center '>
            <span className='text-black bg-white hover:text-white hover:bg-black'>
              配信用和風時計
            </span>
          </div>
        </Link>
        <Link href='/wafutokei'>
          <div className='p-4 bg-green-500 rounded-lg 
            hover:shadow-xl hover:bg-green-400'>
            <div className='pb-4'>example 右寄せパターン</div>
            <Wafu direction={'left'}/>
          </div>
        </Link>
      </div>
    </div>
  )
}