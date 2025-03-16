
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, LineChart, PieChart, DollarSign, TrendingUp, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinanceCareerPage = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Finance Careers in Tech</h1>
          <p className="text-xl text-muted-foreground">
            Explore opportunities at the intersection of finance and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Financial Analysis",
              icon: <BarChart3 className="h-8 w-8 text-primary" />,
              description: "Apply data analysis to financial markets and investment strategies."
            },
            {
              title: "FinTech Development",
              icon: <DollarSign className="h-8 w-8 text-primary" />,
              description: "Build the next generation of financial technology platforms."
            },
            {
              title: "Investment Strategy",
              icon: <TrendingUp className="h-8 w-8 text-primary" />,
              description: "Leverage AI and machine learning to optimize investment portfolios."
            },
            {
              title: "Financial Planning",
              icon: <LineChart className="h-8 w-8 text-primary" />,
              description: "Help businesses and individuals plan for financial success."
            },
            {
              title: "Blockchain Finance",
              icon: <PieChart className="h-8 w-8 text-primary" />,
              description: "Work with blockchain technology in financial applications."
            },
            {
              title: "Corporate Finance",
              icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />,
              description: "Guide companies through financial decisions and strategy."
            }
          ].map((job, index) => (
            <Card key={index} className="techblue-panel hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {job.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <Button variant="link" asChild className="p-0 h-auto text-primary font-normal hover:no-underline">
                  <Link to="#" className="flex items-center gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills in Demand</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Financial Modeling", "Data Analysis", "Risk Assessment", 
              "Blockchain", "Machine Learning", "Algorithmic Trading", 
              "Market Analysis", "Quantitative Analysis"
            ].map((skill, index) => (
              <div key={index} className="bg-background/60 border border-primary/10 rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <Button size="lg" asChild>
            <Link to="/assessment">Start Skill Assessment</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinanceCareerPage;
