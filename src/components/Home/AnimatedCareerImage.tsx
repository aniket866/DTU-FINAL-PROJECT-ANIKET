
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Cpu, Brain, Rocket } from 'lucide-react';

const AnimatedCareerImage = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const icons = [
    { icon: <GraduationCap className="text-primary" />, label: "Education" },
    { icon: <Briefcase className="text-primary" />, label: "Business" },
    { icon: <Cpu className="text-primary" />, label: "Technology" },
    { icon: <Brain className="text-primary" />, label: "Innovation" },
    { icon: <Rocket className="text-primary" />, label: "Growth" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex(prev => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, scale: 0.8, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative h-[300px] flex items-center justify-center">
      {/* Background glow effect */}
      <div className="absolute w-56 h-56 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      
      {/* Main rotating element */}
      <div className="relative z-10">
        <motion.div
          className="flex flex-col items-center"
          key={rotationIndex}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div 
            className="w-32 h-32 rounded-full bg-background/80 border-2 border-primary/30 backdrop-blur-sm flex items-center justify-center mb-4"
            animate={{ 
              boxShadow: ['0 0 0 rgba(120, 120, 255, 0)', '0 0 30px rgba(120, 120, 255, 0.4)', '0 0 0 rgba(120, 120, 255, 0)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="text-5xl"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 0.9, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {icons[rotationIndex].icon}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-medium text-primary"
          >
            {icons[rotationIndex].label}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Orbiting particles */}
      <motion.div 
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/40"
            style={{
              top: `${50 + 40 * Math.sin(2 * Math.PI * i / 5)}%`,
              left: `${50 + 40 * Math.cos(2 * Math.PI * i / 5)}%`,
            }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCareerImage;
