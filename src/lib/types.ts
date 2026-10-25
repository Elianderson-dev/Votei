// ============================================================================
// Votei! - Core Type Definitions
// ============================================================================

/** A single event in a candidate's political timeline */
export interface TimelineEvent {
  id: string;
  ano: number;
  mes?: number;
  titulo: string;
  resumo: string;
  fonte: string;
  fonteNome: string;
  tipo: 'nascimento' | 'formacao' | 'cargo' | 'partido' | 'marco' | 'judicial';
  revisar: boolean;
}

/** Visual theme for a candidate's game experience */
export interface CandidateTheme {
  primary: string;
  secondary: string;
  bgStart: string;
  bgEnd: string;
  text: string;
  dark: {
    primary: string;
    secondary: string;
    bgStart: string;
    bgEnd: string;
    text: string;
  };
}

/** Scene configuration for each timeline checkpoint */
export interface SceneConfig {
  skyColors: [string, string];
  groundColor: string;
  bgElements: SceneElement[];
  fgElements: SceneElement[];
  darkSkyColors: [string, string];
  darkGroundColor: string;
}

/** A visual element in the game scene */
export interface SceneElement {
  type: 'building' | 'tree' | 'mountain' | 'monument' | 'flag' | 'cloud' | 'cactus' | 'palm' | 'church' | 'factory' | 'capitol';
  x: number;
  y: number;
  scale: number;
  color?: string;
}

/** Birth place */
export interface Naturalidade {
  cidade: string;
  uf: string;
  ufNome: string;
}

/** Complete candidate data */
export interface Candidate {
  id: string;
  nomeUrna: string;
  nomeCompleto: string;
  partido: string;
  numero: number;
  naturalidade: Naturalidade;
  anoNascimento: number;
  vice: string;
  vicePartido: string;
  coligacao?: string;
  bio: string;
  tema: CandidateTheme;
  eventos: TimelineEvent[];
}

/** Candidate summary for listing */
export interface CandidateSummary {
  id: string;
  nomeUrna: string;
  partido: string;
  numero: number;
  naturalidade: Naturalidade;
  tema: CandidateTheme;
  vice: string;
  vicePartido: string;
  bio: string;
  eventCount: number;
}

/** Game state */
export interface GameState {
  currentCheckpoint: number;
  totalCheckpoints: number;
  avatarX: number;
  avatarY: number;
  isMoving: boolean;
  direction: 'left' | 'right' | 'idle';
  cardOpen: boolean;
  paused: boolean;
}

/** User flag choice — localStorage ONLY */
export interface FlagChoice {
  candidateId: string | null;
  timestamp: number;
}

export type ThemeMode = 'light' | 'dark';
export type SharePlatform = 'whatsapp' | 'x' | 'telegram' | 'copy';
