'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    setTheme(next);
  };
  return (
    <button className="toggle" onClick={toggle} aria-label="Changer de thème">
      {theme === 'dark' ? '☀️ Clair' : '🌙 Sombre'}
    </button>
  );
}
