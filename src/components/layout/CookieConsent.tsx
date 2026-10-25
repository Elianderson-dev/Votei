'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_STORAGE_KEY = 'votei_cookie_consent';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!consent) {
        setShowBanner(true);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    } catch {
      // Ignore
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Consentimento de Privacidade e Cookies"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          <strong className="font-semibold text-slate-900 dark:text-white">
            Privacidade e LGPD:
          </strong>{' '}
          Utilizamos armazenamento local exclusivamente para preferências essenciais (tema claro/escuro e sua seleção de bandeira). A indicação de afinidade é mantida{' '}
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
            estritamente no seu dispositivo
          </span>{' '}
          e nunca é enviada a servidores ou rastreada. Conheça nossa{' '}
          <Link
            href="/privacidade"
            className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700"
          >
            Política de Privacidade
          </Link>
          .
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleAccept}
            className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
          >
            Entendido e Aceitar
          </button>
        </div>
      </div>
    </aside>
  );
};
