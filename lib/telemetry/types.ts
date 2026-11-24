/** Contrato de respuesta de la RPC `get_portfolio_metrics` (ver MVP-telemetria.md). */

export interface MetricsPeriod {
  views: number;
  sessions: number;
}

export interface MetricsDay {
  /** Fecha en formato YYYY-MM-DD (America/Bogota). */
  day: string;
  views: number;
  sessions: number;
}

export interface PortfolioMetrics {
  /** Total acumulado. */
  total: MetricsPeriod;
  /** Solo el día de hoy. */
  today: MetricsPeriod;
  /** Últimos siete días, orden ascendente por fecha. */
  daily: MetricsDay[];
}
