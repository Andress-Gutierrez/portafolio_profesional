import { dataExperience } from "@/Data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
  // El nivel se deriva del valor para que el texto y la barra NUNCA se desalineen.
  // Escala: 0-49 Basic · 50-79 Intermediate · 80-100 Proficient
  const getLevelLabel = (value: number) => {
    if (value >= 80) return "Proficient";
    if (value >= 50) return "Intermediate";
    return "Basic";
  };

  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="skills">
      <Title title="Experience" subtitle="Skills I have" />

      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {dataExperience.map((data, index) => (
          <div
            key={data.id}
            className={`p-6 rounded-xl border border-gray-400 transition-all duration-300 transform hover:scale-105 animate-fade-in ${
              dataExperience.length % 2 !== 0 &&
              index === dataExperience.length - 1
                ? "md:col-span-2"
                : ""
            }`}
          >
            <h3 className="text-center text-xl">{data.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.experience.map((item) => (
                <div key={item.name} className="my-4">
                  <p className="flex gap-2 mb-2">
                    <BadgeCheck />
                    {item.name}
                  </p>
                  <p className="text-gray-400 mb-2">
                    {getLevelLabel(item.value)}
                  </p>
                  <Progress value={item.value} className="w-[60%]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
