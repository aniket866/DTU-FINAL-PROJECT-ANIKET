
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className, fullWidth = false, noPadding = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main 
        className={cn(
          "flex-grow pt-20",
          !noPadding && "py-8 md:py-12",
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
