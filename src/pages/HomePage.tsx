import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCareerImage from '@/components/Home/AnimatedCareerImage';
import { 
  Zap,
  ArrowRight,
  Bot, 
  BookOpen, 
  Brain, 
  Users, 
  Award, 
  BarChart,
  MessageSquare,
  CheckCircle2,
  Play,
  Sparkles,
  Rocket,
  Target,
  Cpu,
  Database,
  GitBranch,
  Cloud,
  Server,
  Shield,
  LineChart,
  Network,
  FileCode2,
  Code,
  Globe,
  Laptop,
  Microscope,
  Stethoscope,
  Scale,
  GraduationCap,
  PenTool
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const HomePage = () => {
  const careerFields = [
    { icon: <Code className="h-5 w-5" />, title: "Software Development", link: "/careers/technology", color: "bg-blue-500/10 text-blue-500" },
    { icon: <Database className="h-5 w-5" />, title: "Data Science", link: "/careers/technology", color: "bg-green-500/10 text-green-500" },
    { icon: <Cloud className="h-5 w-5" />, title: "Cloud Computing", link: "/careers/technology", color: "bg-purple-500/10 text-purple-500" },
    { icon: <Shield className="h-5 w-5" />, title: "Cybersecurity", link: "/careers/technology", color: "bg-red-500/10 text-red-500" },
    { icon: <Cpu className="h-5 w-5" />, title: "AI & Machine Learning", link: "/careers/technology", color: "bg-amber-500/10 text-amber-500" },
    { icon: <Stethoscope className="h-5 w-5" />, title: "Healthcare Tech", link: "/careers/healthcare", color: "bg-emerald-500/10 text-emerald-500" },
    { icon: <Laptop className="h-5 w-5" />, title: "Business Management", link: "/careers/business", color: "bg-pink-500/10 text-pink-500" },
    { icon: <BarChart className="h-5 w-5" />, title: "Finance", link: "/careers/finance", color: "bg-cyan-500/10 text-cyan-500" },
    { icon: <Network className="h-5 w-5" />, title: "Marketing", link: "/careers/marketing", color: "bg-indigo-500/10 text-indigo-500" },
    { icon: <GitBranch className="h-5 w-5" />, title: "Engineering", link: "/careers/engineering", color: "bg-orange-500/10 text-orange-500" },
    { icon: <Scale className="h-5 w-5" />, title: "Legal Tech", link: "/careers/legal", color: "bg-rose-500/10 text-rose-500" },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Education Tech", link: "/careers/education", color: "bg-teal-500/10 text-teal-500" }
  ];

  return (
    <MainLayout fullWidth noPadding>
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={16} className="mr-2" />
                </motion.div>
                <span className="text-sm font-medium">AI-Powered Career Growth</span>
              </div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Transform Your Future with{" "}
                <motion.span 
                  className="text-primary"
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AI-Driven Guidance
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Navigate your career path with precision using our AI-powered guidance system. Get personalized insights, interview preparation, and skill development recommendations.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-md px-8" asChild>
                  <Link to="/register">Start Free Trial</Link>
                </Button>
                
                <Button size="lg" variant="outline" className="rounded-md flex items-center gap-2" asChild>
                  <Link to="/interview">
                    <Play className="h-4 w-4" />
                    Try AI Interview
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">4,800+</span> tech professionals using our platform
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center items-center">
              <AnimatedCareerImage />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background/50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Rocket size={16} className="mr-2" />
              <span className="text-sm font-medium">Career Paths</span>
            </div>
            <h2 className="text-3xl font-bold">Explore Tech Career Paths</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Discover opportunities across various tech disciplines with personalized AI guidance
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {careerFields.map((field, index) => (
              <motion.div
                key={index}
                className={`${field.color} rounded-xl p-5 border border-white/10 shadow-sm hover:shadow-md transition-all`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={field.link} className="block">
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <motion.div 
                      className="mb-3"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                    >
                      {field.icon}
                    </motion.div>
                    <h3 className="text-sm font-medium">{field.title}</h3>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-around">
            <div className="text-center px-4 mb-8">
              <div className="text-3xl font-bold text-primary">+64%</div>
              <div className="text-sm text-muted-foreground mt-1">Interview success after just 3 sessions</div>
            </div>
            <div className="text-center px-4 mb-8">
              <div className="text-3xl font-bold text-primary">93%</div>
              <div className="text-sm text-muted-foreground mt-1">User satisfaction rate</div>
            </div>
            <div className="text-center px-4 mb-8">
              <div className="text-3xl font-bold text-primary">12,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Career paths analyzed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to accelerate your tech career?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals using AI to improve their skills and land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-lg">
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-lg">
                <Link to="/interview" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Try AI Interview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
