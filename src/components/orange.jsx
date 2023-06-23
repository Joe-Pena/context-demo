import { useCoding } from "@/context/codingContext";

export default function Orange() {
  const { codingData } = useCoding();
  console.log(codingData);
  return (
    <div className="h-1/2 bg-orange-500/10 w-full border-2 mix-blend-lighten border-orange-600 rounded-lg flex flex-col flex-wrap p-6">
      <h1> CodingContext</h1>
      <div className="h-full w-1/2 self-end justify-self-end overflow-scroll">
        {codingData.map((coding, index) => {
          return (
            <div key={index}>
              <h2 className="text-sm text-orange-600">{coding.description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
