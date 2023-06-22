import { useBeer } from "@/context/beerContext"
import Pink from "./pink"
import Yellow from "./yellow"

export default function Purple() {
  const { beerData } = useBeer();

  return (
    <div className='h-full bg-purple-500/10 w-1/2 border-2 mix-blend-lighten border-purple-600 rounded-lg p-6 gap-6 flex'>
    <div className="flex flex-col gap-6 w-1/2 h-full">
      <Yellow />
      <Pink />
    </div>
    <div className="h-full w-1/2 self-end justify-self-end overflow-scroll">
      {beerData.map((beer, index) => {
        return (
          <div key={index}>
            <h2 className='text-sm text-purple-600'>{beer.name}</h2>
          </div>
        )
      })}
    </div>
    </div>
  )
}