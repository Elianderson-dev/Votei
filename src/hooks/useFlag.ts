'use client';

import { useState, useEffect, useCallback } from 'react';
import { FlagChoice } from '@/lib/types';

const FLAG_STORAGE_KEY = 'votei_flag_choice';

/**
 * Manages the user's Brazil flag affinity choice.
 * 
 * PRIVACY & ELECTORAL LEGAL NOTICE:
 * As mandated by law and LGPD regarding political opinion (sensitive personal data):
 * - This value is stored EXCLUSIVELY in the user's local browser storage.
 * - It is NEVER sent to the server, telemetry, analytics, or third parties.
 * - No poll, tally, ranking, or statistics are computed.
 */
export function useFlag() {
  const [flagChoice, setFlagChoice] = useState<FlagChoice>({
    candidateId: null,
    timestamp: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FLAG_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as FlagChoice;
        if (parsed && typeof parsed.candidateId === 'string') {
          setFlagChoice(parsed);
        }
      }
    } catch {
      // Storage unavailable or disabled
    }
    setMounted(true);
  }, []);

  const setFlag = useCallback((candidateId: string) => {
    const choice: FlagChoice = {
      candidateId,
      timestamp: Date.now(),
    };
    setFlagChoice(choice);
    try {
      localStorage.setItem(FLAG_STORAGE_KEY, JSON.stringify(choice));
    } catch {
      // Ignore
    }
  }, []);

  const removeFlag = useCallback(() => {
    const choice: FlagChoice = {
      candidateId: null,
      timestamp: Date.now(),
    };
    setFlagChoice(choice);
    try {
      localStorage.removeItem(FLAG_STORAGE_KEY);
    } catch {
      // Ignore
    }
  }, []);

  const toggleFlag = useCallback(
    (candidateId: string) => {
      if (flagChoice.candidateId === candidateId) {
        removeFlag();
      } else {
        setFlag(candidateId);
      }
    },
    [flagChoice.candidateId, removeFlag, setFlag]
  );

  const hasFlag = useCallback(
    (candidateId: string) => {
      return flagChoice.candidateId === candidateId;
    },
    [flagChoice.candidateId]
  );

  return {
    flaggedCandidateId: flagChoice.candidateId,
    setFlag,
    removeFlag,
    toggleFlag,
    hasFlag,
    mounted,
  };
}
