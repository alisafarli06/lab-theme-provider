'use client';

import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface px-6 py-3">
      <nav className="mx-auto flex max-w-md items-center justify-between">
        <span className="text-base font-semibold text-foreground">
          🌙 Aurora Notes
        </span>
        {/* Bonus: navbar also reads and flips the theme — proves shared context */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-opacity hover:opacity-70"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}
