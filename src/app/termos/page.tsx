import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso | Votei!',
  description:
    'Termos de uso, condições legais e diretrizes de utilização da plataforma cívica Votei!',
};

export default function TermosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <section className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
          Regulamento de Uso
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Termos de Uso da Plataforma
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Vigência: Eleições Gerais 2026
        </p>
      </section>

      <section className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            1. Natureza Informativa e Cívica
          </h2>
          <p>
            O Votei! é disponibilizado como serviço de interesse público e cidadania, visando consolidar de forma acessível e interativa as trajetórias políticas de todos os postulantes à Presidência do Brasil no 1º turno de 2026.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            2. Ausência de Vínculo Institucional
          </h2>
          <p>
            Esta plataforma é desenvolvida por desenvolvedores independentes e <strong>não possui qualquer vinculação governamental, partidária ou jurídica</strong> com o Tribunal Superior Eleitoral (TSE), Tribunais Regionais Eleitorais (TREs), partidos políticos, federações ou candidatos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            3. Integridade e Uso do Conteúdo
          </h2>
          <p>
            Os dados biográficos e cronológicos foram extraídos de registros públicos oficiais sob a égide da Lei de Acesso à Informação (Lei nº 12.527/2011). É expressamente vedada a utilização do material disponibilizado nesta plataforma para:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Produção de desinformação, montagens, difamação ou sátiras que violem a legislação eleitoral vigente.</li>
            <li>Divulgação enganosa como se fossem estatísticas ou pesquisas eleitorais registradas.</li>
            <li>Qualquer prática que configure propaganda eleitoral irregular ou impulsionamento ilícito.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            4. Isenção de Responsabilidade
          </h2>
          <p>
            Embora todos os esforços sejam empenhados na precisão documental, o site reflete os dados cadastrados pelos próprios candidatos e partidos perante a Justiça Eleitoral. Alterações de registro, desistências ou novas decisões judiciais são refletidas conforme atualizações dos sistemas oficiais.
          </p>
        </div>
      </section>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          ← Voltar à Página Inicial
        </Link>
      </div>
    </main>
  );
}
