import { useCoding } from "@/context/codingContext";

export default function Orange() {
  const { codingData } = useCoding();
console.log(codingData);
  return (
    <div className="h-1/2 bg-blue-500/10 w-full border-2 mix-blend-lighten border-blue-600 rounded-lg flex flex-col flex-wrap p-6">
      {codingData.map((coding, index) => {
        return (
          <div key={index}>
            <h2 className="text-sm text-blue-600">{coding.description}</h2>
          </div>
        );
      })}
    </div>
  );
}
