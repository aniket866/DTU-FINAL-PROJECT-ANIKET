
import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Mic, MessageSquare, Smile, BarChart, Clock, Play, Pause, RotateCcw, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const InterviewPage = () => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  
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
              <Video className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">AI Interview Simulator</h1>
          </div>
          <p className="text-muted-foreground">
            Practice interviews with real-time AI feedback on your responses, body language, and speech patterns.
          </p>
        </motion.div>
        
        {!interviewStarted ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="mb-6 animated-border overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                  <CardTitle className="text-2xl">Start a Mock Interview</CardTitle>
                  <CardDescription className="text-base">
                    Our AI interviewer will ask you questions and provide real-time feedback to help you improve.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 text-center">
                    <div className="py-8">
                      <Tabs defaultValue="general" className="w-full max-w-2xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                          <TabsTrigger value="general">General</TabsTrigger>
                          <TabsTrigger value="technical">Technical</TabsTrigger>
                          <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                        </TabsList>
                        <TabsContent value="general" className="space-y-4">
                          <div className="text-center mb-6">
                            <h3 className="text-lg font-medium">General Interview</h3>
                            <p className="text-sm text-muted-foreground">
                              Common questions suitable for any industry or role
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Tell me about yourself and your background
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Why are you interested in this position?
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              What are your strengths and weaknesses?
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Where do you see yourself in 5 years?
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="technical" className="space-y-4">
                          <div className="text-center mb-6">
                            <h3 className="text-lg font-medium">Technical Interview</h3>
                            <p className="text-sm text-muted-foreground">
                              Role-specific technical questions for various industries
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Explain a complex technical concept in simple terms
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Describe a technical challenge you overcame
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              How do you stay updated with industry trends?
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Walk through your approach to problem-solving
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="behavioral" className="space-y-4">
                          <div className="text-center mb-6">
                            <h3 className="text-lg font-medium">Behavioral Interview</h3>
                            <p className="text-sm text-muted-foreground">
                              Questions about past behavior and situational responses
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Tell me about a time you worked under pressure
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Describe a conflict you had with a team member
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              Give an example of a goal you achieved
                            </div>
                            <div className="p-4 bg-primary/5 rounded-lg text-sm">
                              How have you handled failure in the past?
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    <motion.button 
                      className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium text-lg shadow-lg group overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setInterviewStarted(true)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 shimmer"></div>
                      <span className="relative flex items-center gap-2">
                        <Video className="h-5 w-5" />
                        Start Interview Session
                      </span>
                    </motion.button>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Get feedback on your speech, tone, and expressions during the interview.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: <Mic className="h-10 w-10 text-indigo-500" />,
                  title: "Speech Analysis",
                  description: "AI evaluates your speaking pace, clarity, filler words, and technical vocabulary."
                },
                {
                  icon: <Smile className="h-10 w-10 text-pink-500" />,
                  title: "Emotion Detection",
                  description: "Our emotion AI reads facial expressions and analyzes confidence levels in real-time."
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-cyan-500" />,
                  title: "Answer Quality",
                  description: "Get detailed feedback on the structure, relevance, and impact of your responses."
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
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-black/90 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Video className="h-16 w-16 mb-4 opacity-20" />
                    <p className="text-xl opacity-60">Camera feed placeholder</p>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 bg-black/50 hover:bg-black/70 border-none">
                        <Mic className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full w-12 h-12 bg-black/50 hover:bg-black/70 border-none">
                        <Video className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-black/50 text-white/80 flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>04:23</span>
                      </div>
                      <Button size="icon" variant="destructive" className="rounded-full w-12 h-12">
                        <Pause className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Current Question</h3>
                    <p className="p-3 rounded-lg bg-primary/5 text-foreground">
                      Tell me about a challenging project you worked on and how you overcame obstacles.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button variant="outline" size="sm" className="gap-1">
                      <RotateCcw className="h-3 w-3" />
                      <span>Repeat</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Play className="h-3 w-3" />
                      <span>Skip</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <FileText className="h-3 w-3" />
                      <span>Sample Answer</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Real-time Feedback</CardTitle>
                  <CardDescription>
                    AI analysis of your speech patterns, tone, and expressions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium flex items-center gap-2">
                        <Mic className="h-4 w-4" /> 
                        Speech Clarity
                      </h4>
                      <span className="text-sm font-medium text-green-500">Good</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[75%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your speech is clear and easy to understand. Good pacing.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium flex items-center gap-2">
                        <Smile className="h-4 w-4" /> 
                        Confidence
                      </h4>
                      <span className="text-sm font-medium text-amber-500">Average</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[50%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Try to maintain more eye contact and use fewer filler words.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" /> 
                        Answer Quality
                      </h4>
                      <span className="text-sm font-medium text-blue-500">Very Good</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[85%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Good structure with clear examples. Consider adding more specific results.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interview Progress</CardTitle>
                  <CardDescription>
                    Track your performance through the interview
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-medium">Question 3 of 10</div>
                      <div className="text-xs text-muted-foreground">General Interview</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      30%
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { question: "Tell me about yourself", status: "completed", score: "85%" },
                      { question: "Why this position?", status: "completed", score: "78%" },
                      { question: "Challenging project", status: "current", score: "..." },
                      { question: "Strengths & weaknesses", status: "upcoming", score: "..." },
                      { question: "Team conflict situation", status: "upcoming", score: "..." },
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg flex justify-between items-center ${
                          item.status === 'current' 
                            ? 'bg-primary/10 border border-primary/30' 
                            : item.status === 'completed' 
                              ? 'bg-secondary/50'
                              : 'bg-secondary/30'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {item.status === 'current' && <Play className="h-4 w-4 text-primary" />}
                          <span className={`text-sm ${item.status === 'upcoming' ? 'text-muted-foreground' : ''}`}>
                            {item.question}
                          </span>
                        </div>
                        <span className="text-sm font-medium">{item.score}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setInterviewStarted(false)}>
                End Interview
              </Button>
              <Button className="gap-2">
                <span>View Full Report</span>
                <BarChart className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export default InterviewPage;
