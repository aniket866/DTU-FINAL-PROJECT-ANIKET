
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  BookOpen, 
  Briefcase, 
  Brain, 
  Users, 
  Award, 
  TrendingUp, 
  Video, 
  ChevronRight,
  Zap,
  BarChart,
  Smile,
  MessageSquare,
  CheckCircle2,
  Play,
  Youtube,
  Sparkles,
  Rocket,
  Target,
  Gem,
  Medal,
  ThumbsUp,
  LifeBuoy,
  Gift,
  Star,
  Code,
  FileSearch,
  Network,
  Cpu,
  Database,
  GitBranch,
  Cloud,
  Server,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const sparkleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: Math.random() * 2
    }
  }
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    scale: [0.9, 1.05, 0.9],
    transition: { 
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror" as const,
      delay: 0.2
    }
  }
};

const HomePage = () => {
  const controls = useAnimation();
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const newFeaturesRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });
  const newFeaturesInView = useInView(newFeaturesRef, { once: true });

  useEffect(() => {
    if (featuresInView) {
      controls.start("visible");
    }
  }, [controls, featuresInView]);

  // Create random sparkles
  const sparkles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`
  }));

  const careerFields = [
    { icon: <Cpu className="h-5 w-5" />, title: "Technology", link: "/careers/technology", color: "bg-blue-500/10 text-blue-500" },
    { icon: <Database className="h-5 w-5" />, title: "Healthcare", link: "/careers/healthcare", color: "bg-green-500/10 text-green-500" },
    { icon: <Briefcase className="h-5 w-5" />, title: "Business", link: "/careers/business", color: "bg-amber-500/10 text-amber-500" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Education", link: "/careers/education", color: "bg-purple-500/10 text-purple-500" },
    { icon: <Shield className="h-5 w-5" />, title: "Legal", link: "/careers/legal", color: "bg-red-500/10 text-red-500" },
    { icon: <GitBranch className="h-5 w-5" />, title: "Engineering", link: "/careers/engineering", color: "bg-orange-500/10 text-orange-500" },
    { icon: <BarChart className="h-5 w-5" />, title: "Finance", link: "/resources", color: "bg-emerald-500/10 text-emerald-500" },
    { icon: <Network className="h-5 w-5" />, title: "Marketing", link: "/resources", color: "bg-pink-500/10 text-pink-500" },
  ];

  return (
    <MainLayout fullWidth noPadding>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute text-primary"
            style={{ 
              left: sparkle.left, 
              top: sparkle.top,
              width: sparkle.size,
              height: sparkle.size
            }}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
          >
            <Sparkles size={sparkle.size} />
          </motion.div>
        ))}
      </div>

      {/* Hero Section - Matched to screenshot */}
      <section className="min-h-screen relative overflow-hidden py-8 flex flex-col lg:flex-row">
        {/* Left side - matches screenshot */}
        <div className="lg:w-3/5 bg-background relative z-10 px-6 lg:px-16 py-12 lg:py-24 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white">SMART</span><br />
                <span className="text-primary cyber-glow">SOLUTIONS</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Integrated solutions in AI and Blockchain to supercharge your career growth across any industry. Enhance your decision-making with data-driven insights.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium rounded-md px-8" asChild>
                  <Link to="/assessment" className="flex items-center gap-2">
                    Start Assessment <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Technology stack icons - Matched to screenshot */}
            <motion.div 
              className="flex items-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 bg-background/30 p-3 rounded-lg border border-primary/20">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="h-4 w-4 text-blue-500" />
                  </motion.div>
                </div>
                <span className="text-sm">AI & ML</span>
              </div>
              
              <div className="flex items-center gap-3 bg-background/30 p-3 rounded-lg border border-primary/20">
                <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <GitBranch className="h-4 w-4 text-purple-500" />
                  </motion.div>
                </div>
                <span className="text-sm">Blockchain</span>
              </div>
            </motion.div>
            
            {/* Stats boxes - Matched to screenshot */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div 
                className="border border-primary/20 bg-background/50 p-5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary">24 hrs</span>
                  <div className="h-1 w-1 rounded-full bg-primary"></div>
                </div>
                <p className="text-xs text-muted-foreground">Response Time</p>
              </motion.div>
              
              <motion.div 
                className="border border-primary/20 bg-background/50 p-5 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary">99.99%</span>
                  <div className="h-1 w-1 rounded-full bg-primary"></div>
                </div>
                <p className="text-xs text-muted-foreground">Platform Uptime</p>
              </motion.div>
            </div>
            
            {/* Stats number - Matched to screenshot */}
            <motion.div 
              className="mt-12 pl-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-5xl font-bold text-primary mb-2">124<span className="text-xl">k</span></h3>
              <p className="text-xs text-muted-foreground">Professionals improved their career with our AI solutions in the last 12 months</p>
            </motion.div>
          </div>
        </div>
        
        {/* Right side - AI augmented face image - Similar to screenshot */}
        <div className="lg:w-2/5 relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="relative z-10 h-full flex items-center justify-center overflow-hidden">
            <motion.img 
              src="/lovable-uploads/2140e25e-18ab-48b2-a10a-6ddf51598998.png"
              alt="AI-augmented professional"
              className="object-cover h-full w-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          
          {/* Right side panels */}
          <motion.div
            className="absolute top-8 right-8 bg-card/10 backdrop-blur-lg border border-primary/20 rounded-lg p-6 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-medium">Light</h4>
              <div className="flex gap-2 items-center">
                <div className="h-4 w-4 rounded-full bg-primary"></div>
                <div className="h-4 w-4 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empowering Education</h3>
              <p className="text-xs text-muted-foreground">with Digital Tech Tools</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Fields Grid - Redesigned to match screenshot style */}
      <section className="py-16 bg-background/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeIn} initial="hidden" animate="visible">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Code size={16} className="mr-2" />
              <span className="text-sm font-medium">Career Fields</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Explore Career Paths</h2>
            <p className="text-lg text-muted-foreground">
              Our AI coach helps professionals in various industries develop their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" as const }}
                    >
                      {field.icon}
                    </motion.div>
                    <h3 className="text-base font-medium">{field.title}</h3>
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

      {/* Core Feature Cards - Redesigned to match screenshot style */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeIn} initial="hidden" animate="visible">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Core Features</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Smart Career Tools</h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge capabilities to accelerate your professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Video className="h-6 w-6 text-primary" />,
                title: "AI Interview Simulator",
                description: "Practice with our AI interviewer that adapts in real-time to your responses."
              },
              {
                icon: <Brain className="h-6 w-6 text-primary" />,
                title: "Skill Analysis",
                description: "Advanced AI evaluates your skills and suggests improvements."
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Market Insights",
                description: "Stay ahead with real-time industry trends and job market analysis."
              },
              {
                icon: <Cpu className="h-6 w-6 text-primary" />,
                title: "AI Career Pathing",
                description: "Intelligent mapping of your optimal career trajectory."
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Data Security",
                description: "Enterprise-grade encryption and privacy for your career data."
              },
              {
                icon: <Cloud className="h-6 w-6 text-primary" />,
                title: "Cloud Integration",
                description: "Seamlessly connect with your existing professional tools."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background/50 border border-primary/20 rounded-xl overflow-hidden transition-all group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" as const }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-background/50 relative overflow-hidden"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "93%", label: "Interview Success Rate" },
              { value: "10,000+", label: "Career Paths Analyzed" },
              { value: "5,000+", label: "Practice Interviews" },
              { value: "98%", label: "User Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 cyber-glow">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-primary/10 to-background overflow-hidden relative"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to accelerate your career?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who are using AI to improve their skills, ace interviews, and land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-lg shadow-lg bg-primary text-black hover:bg-primary/90">
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-lg">
                <Link to="/interview" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Try AI Interview
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </motion.section>
    </MainLayout>
  );
};

export default HomePage;
