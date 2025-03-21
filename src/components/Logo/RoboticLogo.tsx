
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, Sparkles } from 'lucide-react';

interface RoboticLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

const RoboticLogo: React.FC<RoboticLogoProps> = ({ 
  size = 'md', 
  withText = true,
  className = ''
}) => {
  const getSize = () => {
    switch (size) {
      case 'sm': return { container: 'w-10 h-10', icon: 20 };
      case 'lg': return { container: 'w-16 h-16', icon: 36 };
      default: return { container: 'w-12 h-12', icon: 28 };
    }
  };

  const sizeConfig = getSize();
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeConfig.container} rounded-lg overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
          animate={{ 
            boxShadow: ['0 0 0 rgba(120, 120, 255, 0)', '0 0 30px rgba(120, 120, 255, 0.7)', '0 0 0 rgba(120, 120, 255, 0)']
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ 
              rotateY: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <GraduationCap size={sizeConfig.icon} className="text-white" />
          </motion.div>
        </motion.div>
        
        {/* Animated particles */}
        <motion.div 
          className="absolute top-1 right-1 h-2 w-2 rounded-full bg-white/80"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-white/60"
          animate={{ 
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.3, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      
      {withText && (
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <span className="font-bold text-xl tracking-tight">Career<span className="text-primary">Hub</span>AI</span>
          <motion.span
            animate={{ 
              opacity: [1, 0.5, 1],
              y: [0, -2, 0] 
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-1"
          >
            <Sparkles className="h-4 w-4 text-primary" />
          </motion.span>
        </motion.div>
      )}
    </div>
  );
};

export default RoboticLogo;
