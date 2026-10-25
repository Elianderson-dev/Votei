'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: 'correcao',
    candidato: '',
    fonteLink: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em produção, integra com endpoint de contato ou fila
    setSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <section className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          Transparência & Checagem
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Canal de Contato & Correção Factual
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Prezamos pela absoluta fidelidade aos documentos oficiais. Se você identificou alguma data imprecisa, link quebrado ou atualização judicial em relação aos 12 candidatos, informe-nos acompanhado do respectivo link oficial para checagem da equipe editorial.
        </p>
      </section>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mx-auto text-emerald-600 text-2xl">
            ✓
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Mensagem Recebida com Sucesso!
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Agradecemos a sua contribuição. Nossa equipe editorial analisará a fonte oficial informada e aplicará a retificação factual se procedente.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              Voltar aos Candidatos
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="Ex.: Maria Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Seu E-mail
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="Ex.: maria@exemplo.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Tipo de Mensagem
              </label>
              <select
                value={formData.assunto}
                onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="correcao">Solicitação de Correção Factual</option>
                <option value="fonte">Sugestão de Fonte Primária</option>
                <option value="acessibilidade">Acessibilidade / Bug Técnico</option>
                <option value="lgpd">Dúvida sobre Privacidade (LGPD)</option>
                <option value="imprensa">Contato Institucional / Imprensa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Candidato Relacionado (opcional)
              </label>
              <input
                type="text"
                value={formData.candidato}
                onChange={(e) => setFormData({ ...formData, candidato: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="Ex.: Lula, Flávio Bolsonaro, Zema..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Link da Fonte Oficial Comprobatória (obrigatório para correções)
            </label>
            <input
              type="url"
              value={formData.fonteLink}
              onChange={(e) => setFormData({ ...formData, fonteLink: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="https://tse.jus.br/... ou https://camara.leg.br/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Descrição Detalhada
            </label>
            <textarea
              required
              rows={5}
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="Descreva com precisão o evento, o ano e a inconsistência observada em relação ao documento oficial."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            Enviar para Checagem Editorial
          </button>
        </form>
      )}
    </main>
  );
}
