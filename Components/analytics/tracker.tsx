"use client";

import { useEffect } from "react";

const CLAVE_SESION = "pf_telemetry_session";
const TREINTA_MINUTOS = 30 * 60 * 1000;
const VENTANA_DEDUPE = 1500;
const DOMINIO_POR_DEFECTO = "portafolio-profesional-e3ii.vercel.app";

// Vive solo mientras el documento está abierto: un remontaje de React no
// duplica la vista, pero una recarga sí cuenta como vista nueva.
let ultimoEnvio = 0;

/**
 * Registra una vista cuando se abre o recarga `/` en el dominio oficial.
 *
 * Reglas (ver CONTEXTO.md → "Telemetría del portafolio" / DEC-014):
 * - Solo cuenta aperturas y recargas: los cambios de ancla no generan vistas.
 * - La sesión se identifica con un UUID v4 guardado en sessionStorage.
 * - Se reutiliza el UUID si han pasado menos de 30 minutos desde el último evento.
 * - La deduplicación por remontaje dura lo que dura el documento: recargar cuenta.
 * - La ingesta es fire-and-forget: si falla, el portafolio sigue funcionando.
 */
export function TelemetryTracker() {
  useEffect(() => {
    try {
      const dominioOficial =
        process.env.NEXT_PUBLIC_SITE_HOST ?? DOMINIO_POR_DEFECTO;

      // Previews, desarrollo, dominios de despliegue largos y dominio propio quedan fuera.
      if (window.location.hostname !== dominioOficial) return;

      // La URL es pública. Se lee del entorno directamente y NO se importa el
      // cliente de Supabase: así supabase-js no entra en el bundle del portafolio.
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (!url) return;

      const ahora = Date.now();
      const path = "/";

      // 1. Recuperar o crear la sesión
      let sessionId: string | null = null;
      let ultimoEvento = 0;

      try {
        const guardado = JSON.parse(
          sessionStorage.getItem(CLAVE_SESION) ?? "null",
        );
        if (guardado && typeof guardado.id === "string") {
          sessionId = guardado.id;
          ultimoEvento = Number(guardado.ts) || 0;
        }
      } catch {
        // sessionStorage corrupto: se generará una sesión nueva
      }

      const sesionExpirada = ahora - ultimoEvento > TREINTA_MINUTOS;
      if (!sessionId || sesionExpirada) {
        sessionId = crypto.randomUUID();
      }

      sessionStorage.setItem(
        CLAVE_SESION,
        JSON.stringify({ id: sessionId, ts: ahora }),
      );

      // 2. Evitar la doble vista por remontaje (StrictMode / re-render)
      if (ahora - ultimoEnvio < VENTANA_DEDUPE) return;

      ultimoEnvio = ahora;

      // 3. Enviar el evento sin bloquear ni romper la página
      void fetch(`${url}/functions/v1/track-visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_type: "page_view",
          page_path: path,
          session_id: sessionId,
        }),
        keepalive: true,
      }).catch(() => {
        // Silencio intencional: la telemetría nunca debe afectar al visitante.
      });
    } catch {
      // Cualquier fallo inesperado se ignora.
    }
  }, []);

  return null;
}
