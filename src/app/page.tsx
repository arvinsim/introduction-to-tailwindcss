import Image from 'next/image'
import { TopNavbar } from '@/app/_components/TopNavbar'
import { Billboard } from './_components/Billboard'

export default function Home() {
  return (
    <div>
      <div className={'w-full bg-viki-blue-950 h-screen'}>
        <TopNavbar />
        <Billboard />
      </div>
    </div>
  )
}
