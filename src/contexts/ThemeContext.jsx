import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class for CSS targeting
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Background colors
      background: isDarkMode ? '#0a0a0a' : '#fafafa',
      backgroundSecondary: isDarkMode ? '#1a1a1a' : '#f8f8f8',
      backgroundCard: isDarkMode ? '#2a2a2a' : '#ffffff',
      backgroundOverlay: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
      
      // Text colors
      textPrimary: isDarkMode ? '#ffffff' : '#1a1a1a',
      textSecondary: isDarkMode ? '#b0b0b0' : '#6a6a6a',
      textMuted: isDarkMode ? '#888888' : '#4a4a4a',
      
      // Brand colors (remain consistent)
      primary: '#8b7355',
      primaryLight: '#a68b5b',
      accent: '#d4af37',
      
      // Border colors
      border: isDarkMode ? '#3a3a3a' : '#e0e0e0',
      borderLight: isDarkMode ? '#2a2a2a' : '#f0f0f0',
      
      // Shadow colors
      shadow: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.08)',
      shadowHover: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.15)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};