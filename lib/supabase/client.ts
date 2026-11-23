import { createBrowserClient } from "@supabase/ssr";

/**
 * Credenciales públicas de Supabase.
 * Se aceptan los dos nombres habituales: el nuevo (publishable) y el clásico (anon).
 */
export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return { url, key };
}

/**
 * Cliente de Supabase para componentes de navegador.
 * Devuelve `null` si faltan las variables de entorno, para que la UI pueda
 * mostrar un mensaje en vez de romperse.
 */
export function createClient() {
  const { url, key } = getSupabaseConfig();

  if (!url || !key) return null;

  return createBrowserClient(url, key);
}
