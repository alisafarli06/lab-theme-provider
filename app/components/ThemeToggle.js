'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
    >
      {/* Bonus: sun/moon icon */}
      <span className="text-base" aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>
      {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    </button>
  );
}
