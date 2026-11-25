"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Aplica `animate-fade-in` cuando el bloque entra en el viewport.
 * Lo que ya está visible al cargar se deja tal cual para evitar parpadeos,
 * y con `prefers-reduced-motion` no se oculta nada.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [oculto, setOculto] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    if (elemento.getBoundingClientRect().top <= window.innerHeight * 0.9) return;

    setOculto(true);

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((entrada) => entrada.isIntersecting)) {
          setOculto(false);
          observador.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    observador.observe(elemento);

    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${oculto ? "opacity-0" : "animate-fade-in"}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
