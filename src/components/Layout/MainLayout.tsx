
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className, fullWidth = false, noPadding = false }) => {
  const location = useLocation();
  const { themeColor } = useTheme();
  const isHomePage = location.pathname === '/';
  const isCyberTheme = themeColor === 'cyber' || themeColor === 'cyberblue';
  
  return (
    <div className={cn(
      "flex flex-col min-h-screen",
      isCyberTheme && "cyber-grid"
    )}>
      <Header />
      <main 
        className={cn(
          "flex-grow",
          isHomePage ? "pt-16" : "pt-24", // Less padding on homepage
          !noPadding && !isHomePage && "py-8 md:py-12",
          className
        )}
      >
        <div className={fullWidth ? "" : "container mx-auto px-4"}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
