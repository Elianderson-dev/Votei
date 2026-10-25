'use client';

import React from 'react';

interface BrazilFlagProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isBadge?: boolean;
}

export const BrazilFlag: React.FC<BrazilFlagProps> = ({
  className = '',
  size = 'md',
  isBadge = false,
}) => {
  const sizeMap = {
    xs: 'w-4 h-3',
    sm: 'w-5 h-3.5',
    md: 'w-7 h-5',
    lg: 'w-10 h-7',
  };

  const badgePosition = isBadge
    ? 'absolute bottom-0 right-0 translate-x-1 translate-y-1 shadow-md border-2 border-white dark:border-slate-800 rounded-sm'
    : '';

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[2px] ${sizeMap[size]} ${badgePosition} ${className}`}
      title="Bandeira do Brasil"
      aria-label="Bandeira Nacional do Brasil"
    >
      <svg
        viewBox="0 0 720 504"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundo Verde */}
        <rect width="720" height="504" fill="#009c3b" />
        {/* Losango Amarelo */}
        <polygon points="360,59 662,252 360,445 58,252" fill="#ffdf00" />
        {/* Círculo Azul */}
        <circle cx="360" cy="252" r="126" fill="#002776" />
        {/* Faixa Branca */}
        <path
          d="M 235 252 A 280 280 0 0 1 485 242 A 295 295 0 0 0 235 252"
          fill="#ffffff"
        />
        {/* Estrela Espiga acima da faixa */}
        <circle cx="370" cy="195" r="4" fill="#ffffff" />
        {/* Constelação Cruzeiro do Sul e estrelas abaixo da faixa */}
        <circle cx="360" cy="285" r="4.5" fill="#ffffff" />
        <circle cx="350" cy="275" r="4" fill="#ffffff" />
        <circle cx="370" cy="275" r="4" fill="#ffffff" />
        <circle cx="360" cy="265" r="3.5" fill="#ffffff" />
        <circle cx="366" cy="280" r="2.5" fill="#ffffff" />
        <circle cx="330" cy="300" r="3.5" fill="#ffffff" />
        <circle cx="390" cy="300" r="3.5" fill="#ffffff" />
        <circle cx="300" cy="320" r="3" fill="#ffffff" />
        <circle cx="420" cy="320" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};
