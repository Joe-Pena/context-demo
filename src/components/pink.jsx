import { useCoffee } from "@/context/coffeeContext";

export default function Pink() {
  const { coffeeData } = useCoffee();
  return (
        <div className='h-1/2 bg-pink-500/10 w-full border-2 mix-blend-lighten border-pink-600 rounded-lg flex flex-col flex-wrap p-6'>
        {coffeeData.map((coffee, index) => {
            return (
              <div key={index}>
                <h2 className='text-sm text-pink-600'>{coffee.title}</h2>
              </div>
            )
          }
        )
        }
          </div>
  )
}