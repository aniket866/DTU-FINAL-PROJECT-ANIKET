
import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, BarChart, Target, CheckCircle, Award, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const AssessmentPage = () => {
  const [started, setStarted] = useState(false);
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <motion.div 
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Skills Assessment</h1>
          </div>
          <p className="text-muted-foreground">
            Our AI-powered skills assessment analyzes your strengths and weaknesses to provide personalized career recommendations.
          </p>
        </motion.div>
        
        {!started ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="mb-6 gradient-border overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                  <CardTitle className="text-2xl">Start Your Career Assessment</CardTitle>
                  <CardDescription className="text-base">
                    Complete a comprehensive assessment to identify your strengths and areas for improvement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 text-center">
                    <motion.button 
                      className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium text-lg shadow-lg group overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStarted(true)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 shimmer"></div>
                      <span className="relative flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Begin Assessment
                      </span>
                    </motion.button>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Takes approximately 15-20 minutes to complete.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: <Target className="h-10 w-10 text-emerald-500" />,
                  title: "Personalized Insights",
                  description: "Get detailed analysis of your skills and competencies with AI-powered evaluation."
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-500" />,
                  title: "Skills Gap Analysis",
                  description: "Identify critical skill gaps based on your career goals and current capabilities."
                },
                {
                  icon: <Award className="h-10 w-10 text-amber-500" />,
                  title: "Industry Benchmarks",
                  description: "Compare your skills against industry standards and top performers."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="animated-border overflow-hidden dark:bg-black/40 bg-white shadow-lg rounded-lg p-6"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Career Skills Assessment</CardTitle>
                  <div className="text-sm text-muted-foreground">Step 1 of 5</div>
                </div>
                <CardDescription>
                  Rate your proficiency in each skill from 1 (Beginner) to 5 (Expert)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Communication Skills",
                  "Problem Solving",
                  "Teamwork & Collaboration",
                  "Technical Knowledge",
                  "Leadership Abilities"
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">{skill}</label>
                      <span className="text-xs text-muted-foreground">Select your level</span>
                    </div>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <Button
                          key={level}
                          variant="outline"
                          className="flex-1 hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                          data-state={level === 3 ? "active" : "inactive"}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStarted(false)}>
                    Back
                  </Button>
                  <Button className="gap-2">
                    <span>Continue</span>
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="px-1">
              <h3 className="text-lg font-medium mb-3">What to expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <ListChecks className="h-5 w-5 text-primary" />,
                    title: "Skill Inventory",
                    description: "Rate your proficiency in key professional and technical skills."
                  },
                  {
                    icon: <Brain className="h-5 w-5 text-primary" />,
                    title: "Psychometric Analysis",
                    description: "Understand your work style, personality traits and behavioral patterns."
                  },
                  {
                    icon: <Target className="h-5 w-5 text-primary" />,
                    title: "Career Goals",
                    description: "Define your short and long-term career objectives."
                  },
                  {
                    icon: <Award className="h-5 w-5 text-primary" />,
                    title: "Personalized Report",
                    description: "Receive a detailed breakdown of your results with improvement recommendations."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg bg-primary/5">
                    <div className="mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export default AssessmentPage;
