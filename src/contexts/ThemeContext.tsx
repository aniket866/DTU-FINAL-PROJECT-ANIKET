
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeColor = 'default' | 'purple' | 'teal' | 'amber' | 'green' | 'rose' | 'cool-gray';

interface ThemeContextType {
  theme: Theme;
  themeColor: ThemeColor;
  setTheme: (theme: Theme) => void;
  setThemeColor: (color: ThemeColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  themeColor: 'default',
  setTheme: () => null,
  setThemeColor: () => null,
  toggleTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [themeColor, setThemeColor] = useState<ThemeColor>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedThemeColor = localStorage.getItem('themeColor') as ThemeColor;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    if (savedThemeColor) {
      setThemeColor(savedThemeColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('themeColor', themeColor);
    
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    const colorClasses = ['theme-purple', 'theme-teal', 'theme-amber', 'theme-green', 'theme-rose', 'theme-cool-gray'];
    document.documentElement.classList.remove(...colorClasses);
    
    if (themeColor !== 'default') {
      document.documentElement.classList.add(`theme-${themeColor}`);
    }
  }, [theme, themeColor]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColor, setTheme, setThemeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
