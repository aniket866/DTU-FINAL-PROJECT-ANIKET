
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

const EngineeringCareerPage = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 bg-primary/10 rounded-lg mb-4"
            >
              <Hammer className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in civil, mechanical, electrical and other engineering fields
            </motion.p>
          </div>
          
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-muted-foreground">Coming soon! Check back for detailed engineering career information.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EngineeringCareerPage;
