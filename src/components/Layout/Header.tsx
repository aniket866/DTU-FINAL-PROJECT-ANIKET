
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Settings, LogOut, User, Layers, 
  ChevronDown, Palette, MonitorSmartphone, Zap, Sparkles,
  Brain, Video, Briefcase, BookOpen, Users, FileText
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, themeColor, toggleTheme, setTheme, setThemeColor } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '/', icon: <Layers className="h-4 w-4" /> },
    { name: 'Interview Simulator', path: '/interview', icon: <Video className="h-4 w-4" /> },
    { name: 'Career Assessment', path: '/assessment', icon: <Brain className="h-4 w-4" /> },
    { name: 'Learning Paths', path: '/learning', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Mentorship', path: '/mentors', icon: <Users className="h-4 w-4" /> },
    { name: 'Resources', path: '/resources', icon: <FileText className="h-4 w-4" /> },
  ];

  // Organized theme colors
  const themeColors = [
    { category: "Standard", 
      colors: [
        { name: "Default", value: "default" },
        { name: "Purple", value: "purple" },
        { name: "Teal", value: "teal" },
        { name: "Amber", value: "amber" },
        { name: "Green", value: "green" },
        { name: "Rose", value: "rose" },
        { name: "Cool Gray", value: "cool-gray" }
      ]
    },
    { category: "Neon & Electric", 
      colors: [
        { name: "Neon Blue", value: "neon-blue" },
        { name: "Cyber Purple", value: "cyber-purple" },
        { name: "Electric Cyan", value: "electric-cyan" },
        { name: "Vibrant Pink", value: "vibrant-pink" },
        { name: "Neon Green", value: "neon-green" },
        { name: "Electric Yellow", value: "electric-yellow" }
      ]
    },
    { category: "Deep & Vibrant", 
      colors: [
        { name: "Deep Violet", value: "deep-violet" },
        { name: "Crimson", value: "crimson" },
        { name: "Emerald", value: "emerald" },
        { name: "Golden", value: "golden" },
        { name: "Ocean", value: "ocean" },
        { name: "Magenta", value: "magenta" }
      ]
    },
    { category: "Digital Themes", 
      colors: [
        { name: "Matrix", value: "matrix" },
        { name: "Cyber", value: "cyber" },
        { name: "Nebula", value: "nebula" },
        { name: "Holographic", value: "holographic" },
        { name: "Synthwave", value: "synthwave" }
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
        scrolled ? 'glassmorphism dark:bg-black/60 py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg animate-pulse-slow">
            <Layers className="text-white" size={24} />
          </div>
          <motion.span 
            className="text-xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CareerCoach<span className="text-primary gradient-text bg-gradient-to-r from-primary via-blue-400 to-primary">AI</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all hover:bg-primary/10 flex items-center gap-2 ${
                  location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground/80'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

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
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
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
                  <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span className="sr-only">Theme settings</span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary"></span>
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
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-background/95 dark:bg-black/95 backdrop-blur-sm pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-1">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
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
                      { name: 'Default', value: 'default' },
                      { name: 'Purple', value: 'purple' },
                      { name: 'Neon Blue', value: 'neon-blue' },
                      { name: 'Cyber Purple', value: 'cyber-purple' },
                      { name: 'Matrix', value: 'matrix' },
                      { name: 'Vibrant Pink', value: 'vibrant-pink' },
                      { name: 'Synthwave', value: 'synthwave' },
                      { name: 'Cyber', value: 'cyber' },
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
    </header>
  );
};

export default Header;
