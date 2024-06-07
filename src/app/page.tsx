import Image from 'next/image'
import { TopNavbar } from '@/app/TopNavbar'
import { Billboard } from './Billboard'
import { OverridingComponents } from './OverridingComponents'
import { FormStates } from './FormStates'

export default function Home() {
  return (
    <div className={'w-full bg-viki-blue-950 h-screen'}>
      <TopNavbar />
      <Billboard />
      <OverridingComponents />
      <FormStates />
    </div>
  )
}
