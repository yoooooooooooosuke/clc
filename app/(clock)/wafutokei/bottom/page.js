import { Wafu } from '@/app/components/wafu/page';

export const metadata = {
  title: "wafu tokei",
  description: "",
};

export default function Home() {
  return(
    <main >
      <Wafu direction={'bottom'}/>
    </main>
  )
}
