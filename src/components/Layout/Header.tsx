
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Settings, LogOut, User, Layers, ChevronDown, Globe } from 'lucide-react';
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, themeColor, toggleTheme, setTheme, setThemeColor } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Interview Simulator', path: '/interview' },
    { name: 'Career Assessment', path: '/assessment' },
    { name: 'Learning Paths', path: '/learning' },
    { name: 'Mentorship', path: '/mentors' },
    { name: 'Resources', path: '/resources' },
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
        scrolled ? 'glassmorphism py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <Layers className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">CareerCoach<span className="text-primary">AI</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-all hover:bg-primary/10 ${
                location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Controls - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
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
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={toggleTheme}>
                  {theme === 'light' ? (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light mode</span>
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Theme Color</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={themeColor}
                onValueChange={(value) => setThemeColor(value as any)}
              >
                <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="purple">Purple</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="teal">Teal</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="amber">Amber</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="green">Green</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="rose">Rose</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="cool-gray">Cool Gray</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm animate-fade-in pt-16">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-all hover:bg-primary/10 ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-border">
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
                      className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/10"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-center"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
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
                  <p className="mb-3 font-medium">Theme Color</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Default', value: 'default', color: 'bg-blue-500' },
                      { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
                      { name: 'Teal', value: 'teal', color: 'bg-teal-500' },
                      { name: 'Amber', value: 'amber', color: 'bg-amber-500' },
                      { name: 'Green', value: 'green', color: 'bg-green-500' },
                      { name: 'Rose', value: 'rose', color: 'bg-rose-500' },
                      { name: 'Cool Gray', value: 'cool-gray', color: 'bg-gray-500' },
                    ].map(item => (
                      <button
                        key={item.value}
                        onClick={() => setThemeColor(item.value as any)}
                        className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                          themeColor === item.value ? 'ring-2 ring-primary' : 'hover:bg-primary/10'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full ${item.color}`} />
                        <span className="text-xs">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
