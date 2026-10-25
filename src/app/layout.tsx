import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://votei.brasil.gov.br'),
  title: {
    default: 'Votei! | Trajetória dos Candidatos à Presidência 2026',
    template: '%s | Votei!',
  },
  description:
    'Experiência interativa e cronologia política factual dos 12 candidatos à Presidência da República no 1º turno das Eleições 2026. Dados oficiais da Justiça Eleitoral (TSE).',
  keywords: [
    'Eleições 2026',
    'Presidente do Brasil',
    'Candidatos 2026',
    'TSE',
    'Trajetória política',
    'DivulgaCandContas',
    'Lula',
    'Flávio Bolsonaro',
    'Ronaldo Caiado',
    'Romeu Zema',
    'Augusto Cury',
    'Renan Santos',
    'Timeline interativa',
  ],
  authors: [{ name: 'Iniciativa Cívica Votei!' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://votei.brasil.gov.br',
    siteName: 'Votei!',
    title: 'Votei! | Trajetória dos Candidatos à Presidência 2026',
    description:
      'Cronologia política factual e interativa de todos os candidatos presidenciais do Brasil em 2026 com registro deferido no TSE.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('votei_theme_mode');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors selection:bg-emerald-500 selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
