import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade e LGPD | Votei!',
  description:
    'Termos de privacidade do Votei! em estrita conformidade com a LGPD (Lei nº 13.709/2018). Proteção rigorosa a dados sensíveis de opinião política.',
};

export default function PrivacidadePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <section className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
          LGPD • Lei nº 13.709/2018
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Política de Privacidade e Proteção de Dados
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Última atualização: 25 de outubro de 2026
        </p>
      </section>

      {/* Destaque Jurídico: Dados Sensíveis */}
      <section className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
        <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
          <span>🔒</span> Princípio Fundamental de Não Coleta de Opinião Política
        </h2>
        <p className="text-sm text-emerald-950/80 dark:text-emerald-300/80 leading-relaxed">
          O art. 5º, inciso II da LGPD classifica a opinião política expressa pelo cidadão como <strong>dado pessoal sensível</strong>. Por essa razão técnica e jurídica, o <strong>Votei! não coleta, não transmite e não armazena em servidores</strong> nenhuma informação sobre candidatos marcados, cliques ou preferências partidárias dos usuários.
        </p>
      </section>

      {/* Seções explicativas */}
      <section className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            1. Armazenamento Local Exclusivo (Client-Side Storage)
          </h3>
          <p>
            O recurso que permite ao usuário fincar a Bandeira do Brasil em um candidato utiliza exclusivamente a tecnologia de <code>localStorage</code> do seu navegador web. Isso significa que:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>A informação permanece unicamente dentro da memória do seu próprio navegador.</li>
            <li>Nenhum pacote de rede com o candidato selecionado é transmitido aos nossos servidores.</li>
            <li>Não mantemos placares, rankings nem contagens de bandeiras.</li>
            <li>Você pode apagar ou alterar sua bandeira a qualquer momento na própria interface ou limpando os dados do navegador.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            2. Preferências Visuais e Acessibilidade
          </h3>
          <p>
            Armazenamos apenas chaves técnicas estritamente necessárias para a boa experiência de navegação:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><code>votei_theme_mode</code>: registra se você prefere o modo Claro ou Escuro.</li>
            <li><code>votei_cookie_consent</code>: registra que você visualizou este aviso de privacidade.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            3. Sem Cadastro Obrigatório
          </h3>
          <p>
            O acesso a 100% dos recursos do Votei! (incluindo a exploração 2D, biografias completas e páginas de candidatos) é totalmente livre e anônimo, dispensando login, e-mail, CPF ou cadastro de qualquer espécie.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            4. Não Enquadramento como Pesquisa Eleitoral
          </h3>
          <p>
            Em observância às resoluções do Tribunal Superior Eleitoral (especialmente a Resolução TSE nº 23.600/2019 e alterações para 2026), reafirmamos que o site não realiza enquetes eleitorais, sondagens de opinião, amostragens estatísticas ou levantamentos de intenção de voto.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            5. Encarregado de Dados (DPO) e Contato
          </h3>
          <p>
            Para esclarecimentos sobre a aplicação da LGPD nesta plataforma ou para exercer seus direitos como titular de dados, entre em contato através da página de <Link href="/contato" className="text-emerald-600 dark:text-emerald-400 underline">Contato</Link>.
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
