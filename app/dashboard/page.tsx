import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { PortfolioMetrics } from "@/lib/telemetry/types";

export const dynamic = "force-dynamic";

function StatCard({
  label,
  views,
  sessions,
}: {
  label: string;
  views: number;
  sessions: number;
}) {
  return (
    <div className="rounded-xl border border-gray-400 p-6">
      <p className="text-sm text-gray-400">{label}</p>
      <div className="mt-3 flex gap-8">
        <div>
          <p className="text-3xl font-bold">{views}</p>
          <p className="text-xs text-gray-400">views</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{sessions}</p>
          <p className="text-xs text-gray-400">sessions</p>
        </div>
      </div>
    </div>
  );
}

export default async function DashboardPage() {
  const supabase = await createClient();

  if (!supabase) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <p className="text-sm text-red-400">
          Missing Supabase configuration. Set{" "}
          <code>NEXT_PUBLIC_SUPABASE_URL</code> and the publishable key.
        </p>
      </main>
    );
  }

  // Verificación en servidor: sin sesión no se ve nada.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data, error } = await supabase.rpc("get_portfolio_metrics");
  const metrics = (data ?? null) as PortfolioMetrics | null;

  if (error || !metrics) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <h1 className="mb-2 text-2xl font-bold">Portfolio metrics</h1>
        <p className="text-sm text-red-400">
          Could not load metrics{error ? `: ${error.message}` : "."}
        </p>
        <form action="/auth/signout" method="post" className="mt-6">
          <button
            type="submit"
            className="rounded-md border border-gray-500 px-4 py-2 text-sm"
          >
            Sign out
          </button>
        </form>
      </main>
    );
  }

  const daily = metrics.daily ?? [];

  return (
    <main className="mx-auto max-w-3xl p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Portfolio metrics</h1>
          <p className="text-sm text-gray-400">{user.email} · America/Bogota</p>
        </div>
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="rounded-md border border-gray-500 px-4 py-2 text-sm transition-colors hover:bg-slate-800"
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          label="Today"
          views={metrics.today?.views ?? 0}
          sessions={metrics.today?.sessions ?? 0}
        />
        <StatCard
          label="All time"
          views={metrics.total?.views ?? 0}
          sessions={metrics.total?.sessions ?? 0}
        />
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Last 7 days</h2>
        {daily.length === 0 ? (
          <p className="text-sm text-gray-400">No data yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="text-gray-400">
              <tr className="border-b border-gray-700">
                <th className="py-2">Day</th>
                <th className="py-2 text-right">Views</th>
                <th className="py-2 text-right">Sessions</th>
              </tr>
            </thead>
            <tbody>
              {daily.map((day) => (
                <tr key={day.day} className="border-b border-gray-800">
                  <td className="py-2">{day.day}</td>
                  <td className="py-2 text-right">{day.views}</td>
                  <td className="py-2 text-right">{day.sessions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}
