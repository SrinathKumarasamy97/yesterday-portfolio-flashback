
import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi, Activity, Zap, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "Customers", path: "/customers" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with IoT theme */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center"
              >
                <Wifi className="w-5 h-5 text-primary" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Accurite Systems</h1>
              <p className="text-xs text-primary">IoT Solutions</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors duration-200 relative ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.title}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
            
            {/* IoT Status Indicators */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center space-x-1"
              >
                <Activity className="w-4 h-4 text-green-500" />
                <span className="text-xs text-muted-foreground">Live</span>
              </motion.div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex items-center space-x-1"
              >
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-muted-foreground">99.9%</span>
              </motion.div>
              
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-muted-foreground">Secure</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-foreground hover:text-primary transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
            
            {/* Mobile IoT Status */}
            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">System Status: Online</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
