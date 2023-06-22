import Blue from '@/components/blue'
import Orange from '@/components/orange'
import Purple from '@/components/purple'

export default function Home() {
  return (
    <main className='flex h-screen flex-col justify-center items-center bg-stone-900 text-stone-300 gap-6 p-6'>
      <h1 className='text-7xl'>Context showcase</h1>
      <div className='flex w-full border-2 border-green-600 rounded-lg h-[40rem] bg-green-300/5 mix-blend-lighten p-10 gap-6'>
        <Purple />
        <div className='flex flex-col w-1/2 h-full gap-6'>
        <Blue/>
        <Orange />
        </div>
      </div>
    </main>
  )
}
