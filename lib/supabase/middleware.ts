import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseConfig } from "./client";

/**
 * Mantiene fresca la sesión de Supabase en cada petición a rutas protegidas.
 * Sin esto, el token caduca y el dashboard expulsa al administrador.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const { url, key } = getSupabaseConfig();
  if (!url || !key) return response;

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        response = NextResponse.next({ request });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  // No quitar: fuerza la validación/renovación del token.
  await supabase.auth.getUser();

  return response;
}
