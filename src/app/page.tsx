import Link from 'next/link';
import { getCandidateSummaries } from '@/lib/candidates';

export default function HomePage() {
  const candidates = getCandidateSummaries();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Trajetória dos Candidatos à Presidência
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Eleições 2026 • 1º Turno • Experiência Interativa e Factual
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {candidates.map((c) => (
          <Link
            key={c.id}
            href={`/candidato/${c.id}`}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:shadow-lg transition-all text-center space-y-2 group"
          >
            <div
              className="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-bold text-lg text-white shadow-md group-hover:scale-105 transition-transform"
              style={{ backgroundColor: c.tema.primary }}
            >
              {c.numero}
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              {c.nomeUrna}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {c.partido} • {c.naturalidade.uf}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
