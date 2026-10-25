'use client';

import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from '@/lib/types';

const THEME_STORAGE_KEY = 'votei_theme_mode';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
        applyThemeClass(stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme: ThemeMode = prefersDark ? 'dark' : 'light';
        setTheme(initialTheme);
        applyThemeClass(initialTheme);
      }
    } catch {
      // Fallback if localStorage is inaccessible
      setTheme('light');
    }
    setMounted(true);
  }, []);

  const applyThemeClass = (newTheme: ThemeMode) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const toggleTheme = useCallback(() => {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyThemeClass(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Silently catch quota or privacy errors
    }
  }, [theme]);

  const setSpecificTheme = useCallback((newTheme: ThemeMode) => {
    setTheme(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignore storage errors
    }
  }, []);

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme: setSpecificTheme,
    mounted,
  };
}
