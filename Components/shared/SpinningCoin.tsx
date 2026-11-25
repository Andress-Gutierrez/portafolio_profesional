"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./SpinningCoin.module.css";

type SpinningCoinProps = {
  src?: string;
  alt?: string;
  /** Tamaño máximo en px (en móvil se limita al 80% del ancho). */
  size?: number;
};

// Grosor del canto de la moneda en px. Debe coincidir con --thickness del CSS.
const THICKNESS = 14;

// Capas del canto, una cada 1px entre las dos caras.
const RIM_LAYERS = Array.from({ length: THICKNESS - 1 }, (_, i) => i - THICKNESS / 2 + 1);

export default function SpinningCoin({
  src = "/profile.webp",
  alt = "Andrés Peña Gutiérrez, Software Developer & Data Analyst",
  size = 340,
}: SpinningCoinProps) {
  const sizes = `(max-width: 768px) 80vw, ${size}px`;

  return (
    // `.headroom` reserva el aire que necesita el salto para no invadir lo que haya arriba.
    <div className={styles.headroom} style={{ "--size": `${size}px` } as CSSProperties}>
      <div className={styles.scene}>
        <div className={styles.shadow} aria-hidden="true" />

        <div className={styles.jumper}>
          <div className={styles.coin}>
            {/* Canto */}
            {RIM_LAYERS.map((z) => (
              <span
                key={z}
                className={styles.rim}
                style={{ transform: `translateZ(${z}px)` }}
                aria-hidden="true"
              />
            ))}

            {/* Cara frontal */}
            <div className={`${styles.face} ${styles.front}`}>
              <Image src={src} alt={alt} fill sizes={sizes} priority />
            </div>

            {/* Cara trasera: la misma imagen. Al ir girada 180° no se ve espejada. */}
            <div className={`${styles.face} ${styles.back}`} aria-hidden="true">
              <Image src={src} alt="" fill sizes={sizes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
