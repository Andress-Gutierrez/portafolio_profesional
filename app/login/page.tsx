import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "@/Components/auth/login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const supabase = await createClient();

  // Si ya hay sesión, no tiene sentido mostrar el formulario.
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-xl border border-gray-400 p-8">
        <h1 className="mb-1 text-xl font-bold">Private dashboard</h1>
        <p className="mb-6 text-sm text-gray-400">
          Sign in to view portfolio metrics.
        </p>

        {supabase ? (
          <LoginForm />
        ) : (
          <p className="text-sm text-red-400">
            Missing Supabase configuration. Set{" "}
            <code>NEXT_PUBLIC_SUPABASE_URL</code> and the publishable key in the
            environment.
          </p>
        )}
      </div>
    </main>
  );
}
