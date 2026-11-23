import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Solo se ejecuta en las rutas del panel privado y el login.
 * El portafolio público queda intacto (no debe pagar el coste del middleware).
 */
export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
