import { useCoffee } from "@/context/coffeeContext";

export default function Blue() {
  const { coffeeData } = useCoffee();

  return (
    <div className="h-1/2 bg-blue-500/10 w-full border-2 mix-blend-lighten border-blue-600 rounded-lg flex flex-col flex-wrap p-6">
      {coffeeData.map((coffee, index) => {
        return (
          <div key={index}>
            <h2 className="text-sm text-blue-600">{coffee.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
