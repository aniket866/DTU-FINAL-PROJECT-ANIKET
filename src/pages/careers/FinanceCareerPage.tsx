
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';

const FinanceCareerPage = () => {
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
              <BarChart className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Finance Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in banking, investment, financial analysis, and financial technology
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Banking</h3>
              <p className="text-muted-foreground mb-4">Careers in commercial, retail, and investment banking.</p>
              <ul className="space-y-2 text-sm">
                <li>• Investment Banker</li>
                <li>• Loan Officer</li>
                <li>• Financial Manager</li>
                <li>• Bank Branch Manager</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Financial Analysis</h3>
              <p className="text-muted-foreground mb-4">Roles focused on analyzing financial data and markets.</p>
              <ul className="space-y-2 text-sm">
                <li>• Financial Analyst</li>
                <li>• Risk Analyst</li>
                <li>• Quantitative Analyst</li>
                <li>• Credit Analyst</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">FinTech</h3>
              <p className="text-muted-foreground mb-4">Innovative roles at the intersection of finance and technology.</p>
              <ul className="space-y-2 text-sm">
                <li>• Blockchain Developer</li>
                <li>• FinTech Product Manager</li>
                <li>• Cryptocurrency Analyst</li>
                <li>• Digital Banking Specialist</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Career Path Development</h2>
            <p className="text-muted-foreground mb-6">
              Our AI coaching platform helps finance professionals navigate their career development with personalized 
              guidance, skill assessments, and industry insights. Whether you're just starting in finance or looking to 
              advance to a senior position, our tools can help you identify opportunities and develop the skills needed 
              for success.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Ready to advance your finance career?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Skill Assessment</h4>
                <p className="text-sm text-muted-foreground">Identify your strengths and areas for improvement in finance.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Market Analysis</h4>
                <p className="text-sm text-muted-foreground">Get insights on current trends and job market in finance.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-medium mb-2">Interview Prep</h4>
                <p className="text-sm text-muted-foreground">Practice with finance-specific interview questions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinanceCareerPage;
