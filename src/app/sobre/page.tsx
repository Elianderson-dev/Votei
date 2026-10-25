import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre e Metodologia | Votei!',
  description:
    'Conheça os princípios editoriais, fontes e metodologia neutra do projeto Votei! para as Eleições 2026.',
};

export default function SobrePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Title */}
      <section className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          Metodologia Editorial & Neutralidade
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Sobre o Projeto Votei!
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          O <strong>Votei!</strong> é uma iniciativa independente dedicada a apresentar a trajetória biográfica e pública de todos os candidatos à Presidência da República do Brasil com registro deferido no 1º turno das Eleições Gerais de 2026.
        </p>
      </section>

      {/* Compromisso com a Neutralidade */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          1. Rigor e Equidade Editorial
        </h2>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
          <p>
            O projeto segue regras editoriais estritas para garantir que nenhum candidato seja favorecido ou prejudicado:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Paridade Visual e Estrutural:</strong> Todos os 12 candidatos contam com a mesma profundidade biográfica, formato idêntico de apresentação e mecanismos equivalentes de navegação interativa.
            </li>
            <li>
              <strong>Linguagem Factual:</strong> Não utilizamos adjetivos de juízo de valor, termos depreciativos ou elogiosos. Os acontecimentos são descritos objetivamente com datas, cargos e eventos comprovados.
            </li>
            <li>
              <strong>Tratamento de Questões Jurídicas:</strong> Registros processuais e investigações são abordados unicamente quando constam em certidões públicas ou acórdãos definitivos de instâncias superiores (STF, STJ, TSE), sempre informando o desfecho processual formal e o link do respectivo tribunal.
            </li>
          </ul>
        </div>
      </section>

      {/* Fontes Primárias */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          2. Fontes Primárias Oficiais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Justiça Eleitoral (TSE)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Dados do sistema DivulgaCandContas, certidões de registro de candidatura, filiações partidárias e atas de convenções.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Congresso Nacional
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Portais de dados abertos da Câmara dos Deputados e do Senado Federal com histórico de mandatos, votações e proposições legislativas.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Acervos Históricos & Universidades
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              FGV CPDOC, Arquivo Nacional, bibliotecas oficiais da Presidência da República e repositórios acadêmicos públicos.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Tribunais Superiores
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Jurisprudência e decisões públicas do Supremo Tribunal Federal (STF) e Superior Tribunal de Justiça (STJ).
            </p>
          </div>
        </div>
      </section>

      {/* Regra Anti-Invenção */}
      <section className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-3">
        <h3 className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <span>🛡️</span> Regra Anti-Invenção & Verificabilidade
        </h3>
        <p className="text-sm text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
          Nenhum ponto da cronologia é publicado sem a indicação da fonte primária pública. Caso não haja documentação oficial acessível sobre determinado período, o tópico é deliberadamente omitido, impedindo qualquer especulação biográfica.
        </p>
      </section>

      {/* Call to action */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          ← Explorar Candidatos
        </Link>
        <Link
          href="/contato"
          className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        >
          Enviar sugestão ou correção →
        </Link>
      </div>
    </main>
  );
}
