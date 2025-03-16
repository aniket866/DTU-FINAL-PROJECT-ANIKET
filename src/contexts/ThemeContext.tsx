
import React, { createContext, useContext, useEffect, useState } from 'react';

// Expanded theme options
type Theme = 'light' | 'dark';
type ThemeColor = 
  'default' | 'purple' | 'teal' | 'amber' | 'green' | 'rose' | 'cool-gray' | 
  'neon-blue' | 'cyber-purple' | 'electric-cyan' | 'vibrant-pink' | 'deep-violet' | 
  'crimson' | 'emerald' | 'golden' | 'ocean' | 'magenta' | 'midnight' | 'sunset' | 
  'aurora' | 'cosmic' | 'lava' | 'forest' | 'ruby' | 'sapphire' | 'topaz' | 
  'amethyst' | 'turquoise' | 'slate' | 'charcoal' | 'silver' | 'bronze' | 
  'neon-green' | 'electric-yellow' | 'plasma' | 'digital' | 'holographic' | 
  'nebula' | 'quantum' | 'celestial' | 'matrix' | 'cyber' | 'techno' | 
  'futuristic' | 'retro-wave' | 'synthwave' | 'vapor' | 'glitch' | 'binary';

interface ThemeContextType {
  theme: Theme;
  themeColor: ThemeColor;
  setTheme: (theme: Theme) => void;
  setThemeColor: (color: ThemeColor) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark', // Changed default
  themeColor: 'default',
  setTheme: () => null,
  setThemeColor: () => null,
  toggleTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark'); // Changed default
  const [themeColor, setThemeColor] = useState<ThemeColor>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedThemeColor = localStorage.getItem('themeColor') as ThemeColor;
    
    if (savedTheme) {
      setTheme(savedTheme);
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
    
    // Create array of all theme colors
    const colorClasses = [
      'theme-purple', 'theme-teal', 'theme-amber', 'theme-green', 'theme-rose', 'theme-cool-gray',
      'theme-neon-blue', 'theme-cyber-purple', 'theme-electric-cyan', 'theme-vibrant-pink', 'theme-deep-violet',
      'theme-crimson', 'theme-emerald', 'theme-golden', 'theme-ocean', 'theme-magenta', 'theme-midnight', 'theme-sunset',
      'theme-aurora', 'theme-cosmic', 'theme-lava', 'theme-forest', 'theme-ruby', 'theme-sapphire', 'theme-topaz',
      'theme-amethyst', 'theme-turquoise', 'theme-slate', 'theme-charcoal', 'theme-silver', 'theme-bronze',
      'theme-neon-green', 'theme-electric-yellow', 'theme-plasma', 'theme-digital', 'theme-holographic',
      'theme-nebula', 'theme-quantum', 'theme-celestial', 'theme-matrix', 'theme-cyber', 'theme-techno',
      'theme-futuristic', 'theme-retro-wave', 'theme-synthwave', 'theme-vapor', 'theme-glitch', 'theme-binary'
    ];
    
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
