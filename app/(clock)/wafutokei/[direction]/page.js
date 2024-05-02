export const runtime = 'edge';
import { Wafu } from '@/app/components/wafu/page';

export const metadata = {
  title: "wafu tokei",
  description: "",
};

export default function Home({params}) {
  console.log(params)
  return(
    <main >
      <Wafu direction={params.direction}/>
    </main>
  )
}