// Declaraciones globales de tipos.
//
// Next.js 15.5 solo declara `*.module.css` en `next/types/global.d.ts`.
// TypeScript 5.9 reporta TS2882 ("Cannot find module or type declarations for
// side-effect import") al importar CSS global en `app/layout.tsx`.
// Esta declaración habilita esos side-effect imports sin desactivar chequeos.

declare module "*.css";
