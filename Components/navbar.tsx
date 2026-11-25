"use client";

import { useEffect, useRef, useState } from "react";
import { itemsNavbar } from "@/Data";
import Link from "next/link";
import { ChartColumn } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  const [oculta, setOculta] = useState(false);
  const enfocado = useRef(false);

  // La barra se oculta al desplazar y reaparece cuando el scroll se detiene.
  // También se oculta mientras se escribe en un campo, para no taparlo.
  useEffect(() => {
    let temporizador: ReturnType<typeof setTimeout>;

    const alDesplazar = () => {
      setOculta(true);
      clearTimeout(temporizador);
      temporizador = setTimeout(() => {
        if (!enfocado.current) setOculta(false);
      }, 180);
    };

    const alEnfocar = (evento: FocusEvent) => {
      const objetivo = evento.target as HTMLElement | null;
      if (objetivo && /^(INPUT|TEXTAREA)$/.test(objetivo.tagName)) {
        enfocado.current = true;
        setOculta(true);
      }
    };

    const alSoltarFoco = () => {
      enfocado.current = false;
      setOculta(false);
    };

    window.addEventListener("scroll", alDesplazar, { passive: true });
    document.addEventListener("focusin", alEnfocar);
    document.addEventListener("focusout", alSoltarFoco);

    return () => {
      window.removeEventListener("scroll", alDesplazar);
      document.removeEventListener("focusin", alEnfocar);
      document.removeEventListener("focusout", alSoltarFoco);
      clearTimeout(temporizador);
    };
  }, []);

  return (
    <nav
      className={`fixed z-20 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-20 transition-all duration-300 ${
          oculta ? "translate-y-32 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
    >
      <div
        className="flex items-center gap-2 justify-center 
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full"
      >
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150"
          >
            <Link href={item.link} aria-label={item.title}>
              {item.icon}
            </Link>
          </div>
        ))}
        <span
          aria-hidden="true"
          className="mx-1 h-6 w-px bg-slate-500/40"
        />
        <div className="cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150">
          <Link
            href="/dashboard"
            aria-label="Private metrics dashboard"
            title="Private metrics dashboard"
          >
            <ChartColumn size={20} />
          </Link>
        </div>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
