import { dataServices } from "@/Data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
      <Title title="Services" subtitle="Skills & Competencies" />

      {/* grid con dos columnas y altura igualada */}
      <div className="grid md:grid-cols-2 gap-8 mt-7 items-stretch">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-full flex flex-col transition-all duration-300 transform hover:scale-105 animate-fade-in"
          >
            {/* título */}
            <h4 className="mb-4 text-xl flex justify-center gap-2 font-semibold">
              {service.icon}
              {service.title}
            </h4>

            {/* lista */}
            <ul className="flex-1">
              {service.features.map((feature, index) => (
                <li key={index} className="flex gap-3 mb-3">
                  <Check className="w-5 h-5 flex-shrink-0 text-green-500" />
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
