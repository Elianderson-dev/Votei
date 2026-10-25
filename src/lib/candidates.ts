import { Candidate, CandidateSummary, SceneConfig } from './types';

// Static imports for 100% build-time SSR/SSG compatibility
import lula from '@/data/candidatos/lula.json';
import flavioBolsonaro from '@/data/candidatos/flavio-bolsonaro.json';
import ronaldoCaiado from '@/data/candidatos/ronaldo-caiado.json';
import zema from '@/data/candidatos/zema.json';
import augustoCury from '@/data/candidatos/augusto-cury.json';
import renanSantos from '@/data/candidatos/renan-santos.json';
import samaraMartins from '@/data/candidatos/samara-martins.json';
import hertzDias from '@/data/candidatos/hertz-dias.json';
import edmilsonCosta from '@/data/candidatos/edmilson-costa.json';
import ruiCostaPimenta from '@/data/candidatos/rui-costa-pimenta.json';
import clarianaBarao from '@/data/candidatos/clariana-barao.json';
import wilsonGrassi from '@/data/candidatos/wilson-grassi.json';

export const CANDIDATES: Candidate[] = [
  lula as unknown as Candidate,
  flavioBolsonaro as unknown as Candidate,
  ronaldoCaiado as unknown as Candidate,
  zema as unknown as Candidate,
  augustoCury as unknown as Candidate,
  renanSantos as unknown as Candidate,
  samaraMartins as unknown as Candidate,
  hertzDias as unknown as Candidate,
  edmilsonCosta as unknown as Candidate,
  ruiCostaPimenta as unknown as Candidate,
  clarianaBarao as unknown as Candidate,
  wilsonGrassi as unknown as Candidate,
];

/**
 * Returns all 12 official presidential candidates.
 * Order is strictly neutral (alphabetical by urna name or candidate number).
 */
export function getAllCandidates(): Candidate[] {
  return CANDIDATES;
}

/**
 * Find candidate by slug / id
 */
export function getCandidateById(id: string): Candidate | undefined {
  return CANDIDATES.find((c) => c.id.toLowerCase() === id.toLowerCase());
}

/**
 * Lightweight summaries for cards and floating icons
 */
export function getCandidateSummaries(): CandidateSummary[] {
  return CANDIDATES.map((c) => ({
    id: c.id,
    nomeUrna: c.nomeUrna,
    partido: c.partido,
    numero: c.numero,
    naturalidade: c.naturalidade,
    tema: c.tema,
    vice: c.vice,
    vicePartido: c.vicePartido,
    bio: c.bio,
    eventCount: c.eventos.length,
  }));
}

/**
 * Helper to generate scene environments dynamically based on candidate origin and event type.
 * Ensures identical visual depth across all candidates while honoring regional origins.
 */
export function getEventSceneConfig(
  eventIndex: number,
  candidate: Candidate
): SceneConfig {
  const isBirth = eventIndex === 0;
  const uf = candidate.naturalidade.uf;

  if (isBirth) {
    // Regional birthplace scene
    return getBirthScene(uf, candidate);
  }

  // Career progression scene
  const isLast = eventIndex === candidate.eventos.length - 1;
  if (isLast) {
    // Brasilia / National Capital scene
    return {
      skyColors: ['#38bdf8', '#bae6fd'],
      groundColor: '#15803d',
      darkSkyColors: ['#0f172a', '#1e293b'],
      darkGroundColor: '#064e3b',
      bgElements: [
        { type: 'cloud', x: 120, y: 50, scale: 1 },
        { type: 'cloud', x: 420, y: 80, scale: 0.8 },
        { type: 'monument', x: 260, y: 190, scale: 1.2 },
        { type: 'capitol', x: 500, y: 200, scale: 1.1 },
        { type: 'flag', x: 620, y: 190, scale: 1 },
      ],
      fgElements: [
        { type: 'tree', x: 80, y: 220, scale: 0.9 },
        { type: 'tree', x: 680, y: 220, scale: 0.9 },
      ],
    };
  }

  // Intermediate career scene
  return {
    skyColors: ['#60a5fa', '#bfdbfe'],
    groundColor: '#16a34a',
    darkSkyColors: ['#111827', '#1f2937'],
    darkGroundColor: '#065f46',
    bgElements: [
      { type: 'cloud', x: 180, y: 60, scale: 0.9 },
      { type: 'building', x: 300, y: 195, scale: 1 },
      { type: 'building', x: 460, y: 195, scale: 0.85 },
      { type: 'flag', x: 600, y: 200, scale: 0.8 },
    ],
    fgElements: [
      { type: 'tree', x: 100, y: 225, scale: 0.8 },
      { type: 'tree', x: 650, y: 225, scale: 0.8 },
    ],
  };
}

function getBirthScene(uf: string, candidate: Candidate): SceneConfig {
  switch (uf) {
    case 'PE':
    case 'MA':
      // Northeast agreste / coastal landscape
      return {
        skyColors: ['#38bdf8', '#fed7aa'],
        groundColor: '#b45309',
        darkSkyColors: ['#1e1b4b', '#312e81'],
        darkGroundColor: '#451a03',
        bgElements: [
          { type: 'cloud', x: 150, y: 50, scale: 0.9 },
          { type: 'mountain', x: 280, y: 190, scale: 1.2, color: '#d97706' },
          { type: 'palm', x: 450, y: 200, scale: 1 },
          { type: 'church', x: 580, y: 205, scale: 0.9 },
        ],
        fgElements: [
          { type: 'cactus', x: 90, y: 225, scale: 0.9 },
          { type: 'palm', x: 680, y: 220, scale: 0.9 },
        ],
      };
    case 'MG':
    case 'GO':
      // Central plateau / mountains landscape
      return {
        skyColors: ['#60a5fa', '#fed7aa'],
        groundColor: '#15803d',
        darkSkyColors: ['#0f172a', '#1e293b'],
        darkGroundColor: '#064e3b',
        bgElements: [
          { type: 'cloud', x: 140, y: 55, scale: 1 },
          { type: 'mountain', x: 320, y: 185, scale: 1.3, color: '#166534' },
          { type: 'church', x: 500, y: 205, scale: 0.95 },
        ],
        fgElements: [
          { type: 'tree', x: 110, y: 225, scale: 1 },
          { type: 'tree', x: 670, y: 225, scale: 0.9 },
        ],
      };
    case 'RJ':
      // Fluminense Serra da Mantiqueira & coastline
      return {
        skyColors: ['#38bdf8', '#e0f2fe'],
        groundColor: '#16a34a',
        darkSkyColors: ['#0c192c', '#1e293b'],
        darkGroundColor: '#064e3b',
        bgElements: [
          { type: 'cloud', x: 180, y: 60, scale: 0.8 },
          { type: 'mountain', x: 270, y: 185, scale: 1.4, color: '#15803d' },
          { type: 'monument', x: 490, y: 200, scale: 1 },
        ],
        fgElements: [
          { type: 'palm', x: 90, y: 220, scale: 1 },
          { type: 'tree', x: 670, y: 225, scale: 0.85 },
        ],
      };
    default:
      // São Paulo / Urban & interior
      return {
        skyColors: ['#60a5fa', '#dbeafe'],
        groundColor: '#475569',
        darkSkyColors: ['#0f172a', '#1e293b'],
        darkGroundColor: '#1e293b',
        bgElements: [
          { type: 'cloud', x: 120, y: 50, scale: 1 },
          { type: 'building', x: 260, y: 190, scale: 1.1 },
          { type: 'building', x: 420, y: 195, scale: 0.9 },
          { type: 'monument', x: 560, y: 205, scale: 0.85 },
        ],
        fgElements: [
          { type: 'tree', x: 100, y: 225, scale: 0.8 },
          { type: 'tree', x: 680, y: 225, scale: 0.8 },
        ],
      };
  }
}
