"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "./shared/container";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";

const Introduction = () => {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "📊 Junior Data Analyst ",
        "🤖 Automation & IA ",
        "☁️ Junior Cloud Engineer ",
        "💻 Junior Developer ",
        "⚡ Electronic Engineer ",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2200,
      startDelay: 300,
      loop: true,
      contentType: "text",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl">Hello I&apos;m</h3>

        <h1 className="text-4xl font-bold mb-3">
          Andrés Peña Gutierrez 👨🏻‍💻
        </h1>

        {/* Texto animado con Typed.js */}
        <h2 className="text-2xl text-gray-400 min-h-[36px]">
          <span ref={typedEl}></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          {/* Contact Me button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>

          {/* Dropdown to Download CV */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <Paperclip className="mr-2" />
                Download CV
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a
                  href="/cv/CV_Spanish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  📄 Spanish
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a
                  href="/cv/CV_English.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  📄 English
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Image
          src="/profile.png"
          alt="profile pic"
          width={640}
          height={400}
        />
      </div>
    </Container>
  );
};

export default Introduction;
