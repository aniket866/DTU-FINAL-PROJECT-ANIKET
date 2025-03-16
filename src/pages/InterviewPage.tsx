
import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Code, MessageSquare, BookOpen, Lightbulb, Video, Heart, User, Bot, CheckCircle, Play, Mic, Monitor } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const InterviewPage = () => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const { toast } = useToast();
  
  const handleStartInterview = () => {
    setInterviewStarted(true);
    toast({
      title: "Interview Session Started",
      description: "Your AI interviewer is ready. Make sure your webcam and microphone are working properly.",
      duration: 5000,
    });
  };
  
  const interviewTypes = [
    {
      id: "technical",
      name: "Technical Interview",
      icon: <Code size={16} />,
      description: "Practice coding problems and system design questions with AI feedback.",
    },
    {
      id: "behavioral",
      name: "Behavioral Interview",
      icon: <MessageSquare size={16} />,
      description: "Master common behavioral questions with real-time feedback on your responses.",
    },
    {
      id: "case",
      name: "Case Interview",
      icon: <BookOpen size={16} />,
      description: "Practice problem-solving for consulting and business roles.",
    },
  ];
  
  const technicalTopics = [
    {
      title: "Data Structures & Algorithms",
      difficulty: "Medium",
      topics: ["Arrays", "Linked Lists", "Trees", "Dynamic Programming"],
      questions: 15,
      time: "45 mins",
      icon: <Code className="h-12 w-12 text-primary" />
    },
    {
      title: "System Design",
      difficulty: "Hard",
      topics: ["Scalability", "Database Design", "API Design", "Microservices"],
      questions: 8,
      time: "60 mins",
      icon: <Monitor className="h-12 w-12 text-primary" />
    },
    {
      title: "Frontend Development",
      difficulty: "Medium",
      topics: ["JavaScript", "React", "CSS", "Browser APIs"],
      questions: 12,
      time: "40 mins",
      icon: <Code className="h-12 w-12 text-primary" />
    }
  ];
  
  const behavioralTopics = [
    {
      title: "Leadership & Teamwork",
      difficulty: "Medium",
      topics: ["Conflict Resolution", "Team Management", "Project Leadership"],
      questions: 10,
      time: "30 mins",
      icon: <User className="h-12 w-12 text-primary" />
    },
    {
      title: "Problem Solving",
      difficulty: "Medium",
      topics: ["Critical Thinking", "Decision Making", "Innovation"],
      questions: 8,
      time: "25 mins",
      icon: <Lightbulb className="h-12 w-12 text-primary" />
    },
    {
      title: "Culture Fit",
      difficulty: "Easy",
      topics: ["Company Values", "Work Style", "Career Goals"],
      questions: 12,
      time: "35 mins",
      icon: <Heart className="h-12 w-12 text-primary" />
    }
  ];
  
  const caseTopics = [
    {
      title: "Market Entry Strategy",
      difficulty: "Hard",
      topics: ["Market Analysis", "Competitive Landscape", "Cost Analysis"],
      questions: 5,
      time: "45 mins",
      icon: <BookOpen className="h-12 w-12 text-primary" />
    },
    {
      title: "Product Launch",
      difficulty: "Medium",
      topics: ["Market Sizing", "Pricing Strategy", "Go-to-Market"],
      questions: 7,
      time: "40 mins",
      icon: <Lightbulb className="h-12 w-12 text-primary" />
    },
    {
      title: "Business Operations",
      difficulty: "Medium",
      topics: ["Process Optimization", "Cost Reduction", "Efficiency Analysis"],
      questions: 6,
      time: "35 mins",
      icon: <MessageSquare className="h-12 w-12 text-primary" />
    }
  ];
  
  const topicsByType = {
    "technical": technicalTopics,
    "behavioral": behavioralTopics,
    "case": caseTopics
  };

  return (
    <MainLayout>
      {!interviewStarted ? (
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">AI Interview Practice</h1>
            <p className="text-muted-foreground">
              Get real-time feedback on your interview responses with our AI-powered interview simulator.
            </p>
          </div>
          
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="mb-6 w-full sm:w-auto grid grid-cols-3 gap-1">
              {interviewTypes.map(type => (
                <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                  {type.icon}
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {interviewTypes.map(type => (
              <TabsContent key={type.id} value={type.id} className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold mb-2">{type.name} Practice</h2>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <Button className="gap-2" onClick={handleStartInterview}>
                    <Video size={16} />
                    Start Interview Session
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {topicsByType[type.id].map((topic, index) => (
                    <Card key={index} className="border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="bg-primary/10 p-3 rounded-md">
                            {topic.icon}
                          </div>
                          <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {topic.difficulty}
                          </div>
                        </div>
                        <CardTitle className="mt-4">{topic.title}</CardTitle>
                        <CardDescription>
                          {topic.questions} questions • {topic.time}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topic.topics.map((t, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-card text-muted-foreground rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full gap-2" onClick={handleStartInterview}>
                          <Play size={16} />
                          Practice Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">How Our AI Interview Works</h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <Bot size={20} className="text-primary" />,
                      title: "AI-Powered Interviewer",
                      description: "Our AI asks relevant questions based on the role you're targeting."
                    },
                    {
                      icon: <Mic size={20} className="text-primary" />,
                      title: "Real-time Analysis",
                      description: "Get feedback on your communication style, content, and delivery."
                    },
                    {
                      icon: <Video size={20} className="text-primary" />,
                      title: "Video Assessment",
                      description: "Optional video analysis provides insights on body language and facial expressions."
                    },
                    {
                      icon: <CheckCircle size={20} className="text-primary" />,
                      title: "Personalized Feedback",
                      description: "Receive detailed reports with specific areas for improvement."
                    }
                  ].map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden border border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Interview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Card className="bg-card border-primary/20">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Interview Session</CardTitle>
                <Button variant="outline" onClick={() => setInterviewStarted(false)}>
                  End Session
                </Button>
              </div>
              <CardDescription>
                Technical Interview - Data Structures & Algorithms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="aspect-video w-full bg-black/90 rounded-lg flex items-center justify-center relative">
                <div className="text-white text-center">
                  <Video className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg font-medium">Camera Preview</p>
                  <p className="text-sm text-white/60">Your camera stream will appear here</p>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white">
                    <Mic size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white">
                    <Video size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">AI Interviewer</div>
                    <p>Could you implement a function to find the longest substring without repeating characters?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">You</div>
                    <p className="text-muted-foreground">Your response will appear here...</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code size={16} /> Code Editor
                  </h3>
                  <div className="bg-card p-4 rounded border border-border font-mono text-sm">
                    <pre>{`function lengthOfLongestSubstring(s) {
  // Your code here
}`}</pre>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb size={16} /> Tips
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>Consider using a sliding window approach</li>
                    <li>You'll need to track characters you've seen</li>
                    <li>Think about how to handle repeated characters</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Response</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </MainLayout>
  );
};

export default InterviewPage;
