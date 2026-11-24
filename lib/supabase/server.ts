import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseConfig } from "./client";

/**
 * Cliente de Supabase para Server Components, Server Actions y Route Handlers.
 * Lee la sesión desde las cookies de la petición.
 */
export async function createClient() {
  const { url, key } = getSupabaseConfig();

  if (!url || !key) return null;

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // En un Server Component no se pueden escribir cookies.
          // El refresco real lo hace el middleware.
        }
      },
    },
  });
}
