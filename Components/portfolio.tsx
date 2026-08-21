"use client";

import { dataPortfolio } from "@/Data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "bg-blue-500";
      case "data-analyst":
        return "bg-purple-500";
      case "other":
        return "bg-orange-500";
      default:
        return "bg-green-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    return category === "data-analyst"
      ? "Data Analyst"
      : category.charAt(0).toUpperCase() + category.slice(1);
  };
  const filters = ["all", "development", "data-analyst", "other"] as const;
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("all");

  const filteredProjects =
    activeFilter === "all"
      ? dataPortfolio
      : dataPortfolio.filter((p) => p.category === activeFilter);

  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Recent Projects 💼" />

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {filters.map((f) => (
          <Button
            key={f}
            variant={activeFilter === f ? "default" : "outline"}
            onClick={() => setActiveFilter(f)}
          >
            {f === "all"
              ? "All"
              : f === "data-analyst"
                ? "Data Analyst"
                : f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Contador */}
      <div className="text-center text-sm text-gray-500 mb-4">
        Showing {filteredProjects.length} of {dataPortfolio.length} projects
      </div>

      {/* Grid de proyectos */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 items-stretch ">
        {filteredProjects.map((data) => (
          <div
            key={data.id}
            className="relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 transform hover:scale-105 animate-fade-in h-full flex flex-col"
          >
            {/* Badge de categoría */}
            <div className="absolute top-4 right-4 z-10 animate-fade-in transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <span
                className={`${getCategoryColor(data.category)} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase `}
              >
                {getCategoryLabel(data.category)}
              </span>
            </div>
            {/* Imagen */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 animate-fade-in transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <Image
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 bg-gradient-to-b from-gray-900 to-black flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">
                {data.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {data.description}
              </p>
              <div className="mt-auto flex gap-3">
                <Link
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs dark:bg-input/30 dark:border-input`}
                  href={data.urlGithub}
                  target="_blank"
                >
                  Github
                </Link>

                <Link
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs`}
                  href={data.urlDemo}
                  target="_blank"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found in this category</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
