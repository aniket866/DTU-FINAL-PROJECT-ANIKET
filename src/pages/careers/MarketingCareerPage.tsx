
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const MarketingCareerPage = () => {
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
              <Network className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Marketing Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in digital marketing, brand management, market research, and content creation
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">Careers focused on online marketing channels and strategies.</p>
              <ul className="space-y-2 text-sm">
                <li>• SEO Specialist</li>
                <li>• Social Media Manager</li>
                <li>• PPC Campaign Manager</li>
                <li>• Email Marketing Specialist</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Brand Management</h3>
              <p className="text-muted-foreground mb-4">Roles centered on developing and managing brand identity.</p>
              <ul className="space-y-2 text-sm">
                <li>• Brand Manager</li>
                <li>• Product Marketing Manager</li>
                <li>• Marketing Director</li>
                <li>• Communications Specialist</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Creative Marketing</h3>
              <p className="text-muted-foreground mb-4">Roles focused on creating and designing marketing content.</p>
              <ul className="space-y-2 text-sm">
                <li>• Content Marketer</li>
                <li>• Graphic Designer</li>
                <li>• Copywriter</li>
                <li>• Video Marketing Specialist</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Marketing Skills Development</h2>
            <p className="text-muted-foreground mb-6">
              Our AI coaching platform helps marketing professionals enhance their skills and advance their careers 
              through personalized assessments, targeted learning recommendations, and practice opportunities. 
              Whether you're new to marketing or an experienced professional, our platform can help you stay 
              current with evolving marketing trends and technologies.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Ready to enhance your marketing career?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Digital Skills Assessment</h4>
                <p className="text-sm text-muted-foreground">Evaluate your proficiency with digital marketing tools and strategies.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Creative Portfolio Review</h4>
                <p className="text-sm text-muted-foreground">Get feedback on your creative marketing materials and content.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Marketing Interview Prep</h4>
                <p className="text-sm text-muted-foreground">Practice with industry-specific marketing interview questions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MarketingCareerPage;
