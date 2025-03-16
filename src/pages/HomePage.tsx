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
  PieChart,
  LineChart,
  AreaChart,
  BarChart2,
  GitBranch,
  Cloud,
  Server,
  Shield
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
      repeatType: "loop",
      delay: Math.random() * 2
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

      {/* Hero Section - Modern with interactive elements (matched to screenshot) */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">AI-Powered Career Development ✨</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Your Personal <span className="text-primary cyber-glow">AI Career Coach</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Accelerate your career growth with personalized AI coaching,
              interview preparation, and skill development.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" asChild className="rounded-lg bg-primary hover:bg-primary/90">
                <Link to="/interview" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Try Interview Simulator
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-lg border-primary/20">
                <Link to="/assessment" className="flex items-center gap-2">
                  Analyze Your Skills
                </Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards - 4 Cards in a row as shown in the screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                title: "AI Interview Coach",
                description: "Practice with AI-simulated interviews that provide real-time feedback."
              },
              {
                icon: <Brain className="h-6 w-6 text-primary" />,
                title: "Skill Development",
                description: "Personalized learning recommendations based on your skill gaps."
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Market Insights",
                description: "Real-time industry trends to help you make informed career decisions."
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Mentorship",
                description: "Connect with AI mentors specialized in your industry for guidance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/30 rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/30"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Tech Tools Grid - Small, even widgets with animations */}
      <section className="py-16 bg-background/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeIn} initial="hidden" animate="visible">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Code size={16} className="mr-2" />
              <span className="text-sm font-medium">Career Fields</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Explore Multiple Career Paths</h2>
            <p className="text-lg text-muted-foreground">
              Our AI coach helps professionals in various industries develop their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: <Cpu className="h-5 w-5" />, title: "Technology", link: "/careers/technology", color: "bg-blue-500/10 text-blue-500" },
              { icon: <Database className="h-5 w-5" />, title: "Healthcare", link: "/careers/healthcare", color: "bg-green-500/10 text-green-500" },
              { icon: <Briefcase className="h-5 w-5" />, title: "Business", link: "/careers/business", color: "bg-amber-500/10 text-amber-500" },
              { icon: <BookOpen className="h-5 w-5" />, title: "Education", link: "/careers/education", color: "bg-purple-500/10 text-purple-500" },
              { icon: <Shield className="h-5 w-5" />, title: "Legal", link: "/careers/legal", color: "bg-red-500/10 text-red-500" },
              { icon: <GitBranch className="h-5 w-5" />, title: "Engineering", link: "/careers/engineering", color: "bg-orange-500/10 text-orange-500" },
              { icon: <LineChart className="h-5 w-5" />, title: "Finance", link: "/resources", color: "bg-emerald-500/10 text-emerald-500" },
              { icon: <Network className="h-5 w-5" />, title: "Marketing", link: "/resources", color: "bg-pink-500/10 text-pink-500" },
              { icon: <Cloud className="h-5 w-5" />, title: "Science", link: "/resources", color: "bg-indigo-500/10 text-indigo-500" },
              { icon: <Server className="h-5 w-5" />, title: "Government", link: "/resources", color: "bg-slate-500/10 text-slate-500" },
              { icon: <FileSearch className="h-5 w-5" />, title: "Research", link: "/resources", color: "bg-cyan-500/10 text-cyan-500" },
              { icon: <BarChart2 className="h-5 w-5" />, title: "Environment", link: "/careers/environmental", color: "bg-teal-500/10 text-teal-500" },
            ].map((field, index) => (
              <motion.div
                key={index}
                className={`${field.color} rounded-xl p-4 border border-white/10 shadow-sm hover:shadow-md transition-all`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={field.link} className="block">
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <motion.div 
                      className="mb-2"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                    >
                      {field.icon}
                    </motion.div>
                    <h3 className="text-sm font-medium">{field.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Career Resources Grid */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeIn} initial="hidden" animate="visible">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Briefcase size={16} className="mr-2" />
              <span className="text-sm font-medium">Career Resources</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Essential Career Tools</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to excel in your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: <Video className="h-5 w-5" />, title: "Mock Interviews", link: "/interview" },
              { icon: <FileSearch className="h-5 w-5" />, title: "Resume Review", link: "/resources" },
              { icon: <BarChart className="h-5 w-5" />, title: "Salary Data", link: "/resources" },
              { icon: <Users className="h-5 w-5" />, title: "Networking Tips", link: "/resources" },
              { icon: <Award className="h-5 w-5" />, title: "Certifications", link: "/learning" },
              { icon: <Brain className="h-5 w-5" />, title: "Technical Quiz", link: "/assessment" },
              { icon: <MessageSquare className="h-5 w-5" />, title: "Communication", link: "/resources" },
              { icon: <TrendingUp className="h-5 w-5" />, title: "Growth Plans", link: "/assessment" },
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={resource.link} className="block p-4 h-full">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                      >
                        {resource.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-sm font-medium">{resource.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Converted to small even widgets */}
      <motion.section
        ref={featuresRef}
        className="py-20 bg-background/30 relative overflow-hidden"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeIn}>
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Powerful AI Tools</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Career Acceleration</h2>
            <p className="text-xl text-muted-foreground">
              Our advanced AI technology provides personalized guidance to help you excel in your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Video className="h-6 w-6 text-primary" />,
                title: "AI Interview Simulator",
                description: "Practice with our AI interviewer that adapts in real-time to your responses."
              },
              {
                icon: <Brain className="h-6 w-6 text-primary" />,
                title: "Emotion AI Analysis",
                description: "Advanced AI evaluates your speech patterns, tone, and facial expressions."
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Skill Gap Analysis",
                description: "AI identifies your strengths and highlights skills you need to develop."
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Personalized Learning",
                description: "Get tailored course recommendations based on your skill gaps."
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Job Matching",
                description: "Smart job matching technology analyzes your profile for ideal roles."
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Mentor Connect",
                description: "Connect with industry mentors who can provide guidance."
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                title: "AI Chat Coach",
                description: "Get instant career advice and coaching through our AI assistant."
              },
              {
                icon: <Award className="h-6 w-6 text-primary" />,
                title: "Skill Certifications",
                description: "Earn verifiable credentials to showcase on your profile."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/30 rounded-xl overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 card-hover group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="p-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <div className="px-5 py-3 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-primary w-full justify-center" asChild>
                    <Link to={feature.title.includes("Interview") ? "/interview" : 
                              feature.title.includes("Skill") ? "/assessment" :
                              feature.title.includes("Learning") ? "/learning" :
                              feature.title.includes("Job") ? "/resources" :
                              feature.title.includes("Mentor") ? "/mentors" : "/"} 
                          className="flex items-center gap-1">
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Improved Career Superpowers Section with even widgets */}
      <motion.section
        ref={newFeaturesRef}
        className="py-20 bg-primary/5 relative overflow-hidden"
        initial="hidden"
        animate={newFeaturesInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeIn}>
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Rocket size={16} className="mr-2" />
              <span className="text-sm font-medium">Career Superpowers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock Your Full Potential</h2>
            <p className="text-xl text-muted-foreground">
              Discover powerful tools designed to transform your career journey and maximize your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {[
              {
                icon: <Target className="h-6 w-6 text-primary" />,
                title: "Career Pathing Tool",
                description: "Map your career trajectory with precision and AI-recommended milestones.",
                buttonText: "Plan Path",
                link: "/assessment"
              },
              {
                icon: <Gem className="h-6 w-6 text-primary" />,
                title: "Skills Marketplace",
                description: "Showcase your verified skills to potential employers in our marketplace.",
                buttonText: "Join Now",
                link: "/resources"
              },
              {
                icon: <Medal className="h-6 w-6 text-primary" />,
                title: "Certification Navigator",
                description: "Identify the most valuable certifications for your target role.",
                buttonText: "Explore",
                link: "/learning"
              },
              {
                icon: <ThumbsUp className="h-6 w-6 text-primary" />,
                title: "Resume AI Enhancer",
                description: "Our AI reviews your resume and suggests improvements.",
                buttonText: "Enhance",
                link: "/resources"
              },
              {
                icon: <LifeBuoy className="h-6 w-6 text-primary" />,
                title: "Crisis Support",
                description: "Get emergency career advice from top coaches when needed.",
                buttonText: "Support",
                link: "/mentors"
              },
              {
                icon: <Gift className="h-6 w-6 text-primary" />,
                title: "Salary Negotiator",
                description: "AI generates a custom negotiation script with market data.",
                buttonText: "Negotiate",
                link: "/resources"
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: "Growth Tracker",
                description: "Monitor your progress and achievements over time.",
                buttonText: "Track",
                link: "/assessment"
              },
              {
                icon: <Star className="h-6 w-6 text-primary" />,
                title: "Premium Network",
                description: "Join exclusive events with industry leaders and hiring managers.",
                buttonText: "Connect",
                link: "/mentors"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glassmorphism dark:bg-black/20 rounded-xl overflow-hidden transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="p-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button size="sm" className="w-full" asChild>
                    <Link to={feature.link}>
                      {feature.buttonText}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-background relative overflow-hidden"
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 neon-glow">{stat.value}</div>
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

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 bg-primary/5"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeIn}>
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Smile size={16} className="mr-2" />
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Our Community</h2>
            <p className="text-xl text-muted-foreground">
              See how professionals like you have advanced their careers with our AI coaching platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Product Manager at Google",
                image: "https://randomuser.me/api/portraits/women/17.jpg",
                quote: "The AI interview practice was incredibly accurate. After just 5 sessions, I felt confident in my actual interviews and landed my dream job at Google."
              },
              {
                name: "Michael Chen",
                role: "Software Engineer at Microsoft",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "The skill gap analysis identified exactly what I needed to learn. The recommended courses helped me upskill quickly and stand out in a competitive job market."
              },
              {
                name: "Jessica Rivera",
                role: "Marketing Director at Adobe",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
                quote: "The AI feedback on my communication style was eye-opening. It helped me refine my presentation skills which has been crucial for my leadership role."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="glassmorphism dark:bg-black/20 rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-white/10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to accelerate your tech career?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who are using AI to improve their skills, ace interviews, and land their dream jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-lg shadow-lg">
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-lg">
                <Link to="/interview" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Try AI Interview
                </Link>
              </Button>
            </div>
            <motion.div 
              className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="font-bold text-lg">Weekly Career Insights</h3>
              </div>
              <p className="text-muted-foreground mb-4">Get weekly AI-curated articles, job opportunities, and tech events directly in your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-lg border px-4 py-2 flex-grow bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </motion.div>
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
