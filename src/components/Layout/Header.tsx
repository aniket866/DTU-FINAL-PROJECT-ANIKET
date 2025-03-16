
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, Settings, LogOut, User, 
  ChevronDown, Palette, MonitorSmartphone, Zap, Sparkles,
  Brain, Video, Briefcase, BookOpen, Users, FileText, Youtube
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import RoboticLogo from '../Logo/RoboticLogo';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const mobileMenuVariants = {
  closed: { 
    opacity: 0,
    scale: 0.95,
    transition: { 
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.2,
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, themeColor, toggleTheme, setTheme, setThemeColor } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '/', icon: <FileText className="h-4 w-4" /> },
    { name: 'Interview AI', path: '/interview', icon: <Video className="h-4 w-4" /> },
    { name: 'Skill Assessment', path: '/assessment', icon: <Brain className="h-4 w-4" /> },
    { name: 'Learning Paths', path: '/learning', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Find Mentors', path: '/mentors', icon: <Users className="h-4 w-4" /> },
    { name: 'Resources', path: '/resources', icon: <Youtube className="h-4 w-4" /> },
    { name: 'Motivation', path: '/motivation', icon: <Sparkles className="h-4 w-4" /> },
  ];

  // Organized theme colors by category for better selection
  const themeColors = [
    { category: "Cyber", 
      colors: [
        { name: "Neon Blue", value: "neon-blue" },
        { name: "Cyber Purple", value: "cyber-purple" },
        { name: "Electric Cyan", value: "electric-cyan" },
        { name: "Cyber", value: "cyber" },
        { name: "Matrix", value: "matrix" },
        { name: "Nebula", value: "nebula" }
      ]
    },
    { category: "Vibrant", 
      colors: [
        { name: "Vibrant Pink", value: "vibrant-pink" },
        { name: "Deep Violet", value: "deep-violet" },
        { name: "Synthwave", value: "synthwave" },
        { name: "Holographic", value: "holographic" },
        { name: "Electric Yellow", value: "electric-yellow" }
      ]
    },
    { category: "Professional", 
      colors: [
        { name: "Default", value: "default" },
        { name: "Purple", value: "purple" },
        { name: "Teal", value: "teal" },
        { name: "Amber", value: "amber" },
        { name: "Green", value: "green" },
        { name: "Rose", value: "rose" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-background/70 dark:bg-black/70 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-10">
          <RoboticLogo size="md" withText={true} />
        </Link>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-1 mx-auto"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.path}
              variants={itemVariants}
              className="relative group"
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 flex items-center gap-2 relative ${
                  location.pathname === link.path 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.icon}
                {link.name}
                
                {/* Active indicator dot */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full -mb-1 transform -translate-x-1/2"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 -z-10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.nav>

        {/* Right Side Controls - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full p-0 h-9 w-9 flex items-center justify-center">
                    <span className="sr-only">Open user menu</span>
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <motion.div 
                      className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary"
                      animate={{ 
                        boxShadow: [
                          '0 0 0 rgba(120, 120, 255, 0)', 
                          '0 0 5px rgba(120, 120, 255, 0.5)', 
                          '0 0 0 rgba(120, 120, 255, 0)'
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "loop" 
                      }}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 animation-slide-in-right">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="cursor-pointer w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-none">
                  <Link to="/register" className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                  <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:rotate-12" />
                  <span className="sr-only">Theme settings</span>
                  <motion.span 
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[340px]">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Appearance</span>
                  <MonitorSmartphone className="h-4 w-4 text-muted-foreground" />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup>
                  <div className="p-2">
                    <div className="flex space-x-2 bg-secondary/50 p-2 rounded-lg">
                      <Button
                        variant={theme === 'light' ? 'default' : 'outline'}
                        size="sm"
                        className="w-full justify-start gap-2"
                        onClick={() => setTheme('light')}
                      >
                        <Sun className="h-4 w-4" />
                        <span>Light</span>
                      </Button>
                      <Button
                        variant={theme === 'dark' ? 'default' : 'outline'}
                        size="sm"
                        className="w-full justify-start gap-2"
                        onClick={() => setTheme('dark')}
                      >
                        <Moon className="h-4 w-4" />
                        <span>Dark</span>
                      </Button>
                    </div>
                  </div>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Theme Color</span>
                </DropdownMenuLabel>
                
                <ScrollArea className="h-[300px]">
                  <div className="p-2 space-y-4">
                    {themeColors.map((category, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground pl-2">
                          {category.category}
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {category.colors.map((item) => (
                            <button
                              key={item.value}
                              onClick={() => setThemeColor(item.value as any)}
                              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                                themeColor === item.value ? 'bg-primary/10 ring-1 ring-primary' : 'hover:bg-secondary'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/60 ${
                                themeColor === item.value ? 'animate-pulse-slow' : ''
                              }`}></div>
                              <span className="text-xs truncate max-w-full">{item.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-background/95 dark:bg-black/95 backdrop-blur-sm pt-16"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              <nav className="flex flex-col space-y-1">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-3 rounded-lg text-lg font-medium transition-all hover:bg-primary/10 flex items-center gap-3 ${
                        location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-foreground/80'
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                className="pt-4 border-t border-border"
                variants={itemVariants}
              >
                <div className="flex flex-col space-y-4">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-3 px-4 py-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <p className="font-medium">{user?.name}</p>
                          <p className="text-sm text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <Link
                        to="/profile"
                        className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/10 flex items-center gap-3"
                      >
                        <User size={18} />
                        <span>Profile</span>
                      </Link>
                      <Link
                        to="/settings"
                        className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/10 flex items-center gap-3"
                      >
                        <Settings size={18} />
                        <span>Settings</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/10 flex items-center gap-3 text-left"
                      >
                        <LogOut size={18} />
                        <span>Log out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/10 flex items-center gap-3"
                      >
                        <User size={18} />
                        <span>Sign In</span>
                      </Link>
                      <Link
                        to="/register"
                        className="px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-3 justify-center"
                      >
                        <Zap size={18} />
                        <span>Get Started</span>
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="pt-4 border-t border-border"
                variants={itemVariants}
              >
                <div className="flex flex-col space-y-4">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                      <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </Button>
                  </div>
                  
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Palette size={18} className="text-primary" />
                      <p className="font-medium">Theme Color</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: 'Cyber', value: 'cyber' },
                        { name: 'Matrix', value: 'matrix' },
                        { name: 'Neon Blue', value: 'neon-blue' },
                        { name: 'Deep Violet', value: 'deep-violet' },
                        { name: 'Cyber Purple', value: 'cyber-purple' },
                        { name: 'Synthwave', value: 'synthwave' },
                        { name: 'Electric Cyan', value: 'electric-cyan' },
                        { name: 'Nebula', value: 'nebula' },
                      ].map(item => (
                        <button
                          key={item.value}
                          onClick={() => setThemeColor(item.value as any)}
                          className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                            themeColor === item.value ? 'ring-2 ring-primary' : 'hover:bg-primary/10'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/60 ${
                            themeColor === item.value ? 'animate-pulse' : ''
                          }`}></div>
                          <span className="text-xs">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
