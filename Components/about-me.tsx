import { dataAboutMe, dataSlider } from "@/Data";
import Link from "next/link";
import { WhatsAppButton } from "@/Components/WhatsAppButton";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About me" subtitle="Get to know me" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Columna del carrusel */}
        <div className="py-12 md:py-0 flex items-center justify-center">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full max-w-md h-fit"
          >
            <CarouselContent className="-mt-1 h-[350px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={300}
                      height={450}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Columna del texto */}
        <div className="flex flex-col ">
          <h4 className="pt-8 my-4 text-xl font-bold text-center">
            Junior Data Analyst & Web Developer
          </h4>

          <p className="my-1 text-gray-400 text-justify hyphens-auto">
            I am an Electronic Engineer and Junior Data Analyst passionate about
            technology, software development, and innovation. I am driven by
            solving complex challenges with scalable and creative solutions,
            combining my experience in programming, electronics, and IoT.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 mt-7 gap-4 ">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-full flex flex-col transition-all duration-300 transform hover:scale-105 animate-fade-in"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className="flex gap-4 mt-6">
            <Link href="tel:+573219471460">
              <Button>
                <Phone size={20} className="mr-2" />
                Contact me
              </Button>
            </Link>
            <WhatsAppButton
              phone="573219471460"
              message="Hola Andrés, vi tu portafolio y quiero más info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
