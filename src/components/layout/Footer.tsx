'use client';

import React from 'react';
import Link from 'next/link';
import { BrazilFlag } from '@/components/ui/BrazilFlag';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Project Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center">
                <BrazilFlag size="xs" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                Votei<span className="text-emerald-600 dark:text-emerald-400">!</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-md">
              Plataforma cívica e interativa de visualização cronológica das trajetórias políticas dos candidatos à Presidência do Brasil no 1º turno das Eleições de 2026.
            </p>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-500">
              Ambiente de dados: Eleições 2026 • 1º Turno • 12 candidaturas deferidas
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Sobre & Metodologia
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Contato & Correções
                </Link>
              </li>
            </ul>
          </div>

          {/* Fontes Oficiais & Transparência */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Fontes Primárias
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://divulgacandcontas.tse.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  TSE • DivulgaCandContas
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dadosabertos.tse.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Portal de Dados Abertos do TSE
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.camara.leg.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Câmara dos Deputados
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.senado.leg.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Senado Federal
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://portal.stf.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  Supremo Tribunal Federal
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            Aviso de Neutralidade e Conformidade Legal Eleitoral:
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Este site tem objetivo exclusivamente informativo, biográfico e educativo. Todas as trajetórias políticas foram compiladas a partir de registros públicos oficiais sob critérios estritos de neutralidade e factualidade. O site não expressa apoio a candidatos, partidos ou coligações, não realiza enquetes eleitorais nem mantém contagem pública de preferências. A opção de marcar a bandeira do Brasil fica salva única e exclusivamente no navegador do visitante (localStorage), em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-2">
          <p>© {currentYear} Votei! • Desenvolvido com dados públicos abertos.</p>
          <p>
            Fonte dos registros: Justiça Eleitoral do Brasil • Última verificação:{' '}
            <time dateTime="2026-10-25">25 de outubro de 2026</time>
          </p>
        </div>
      </div>
    </footer>
  );
};
