
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
  Star
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

      {/* Hero Section - Modern with interactive elements */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
                <Bot size={16} className="mr-2" />
                <span className="text-sm font-medium">AI-Powered Career Growth</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient-shift bg-[length:200%_auto]">Tech Career</span> With AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get personalized career guidance, interview practice, skill analysis,
                and exclusive mentorship to advance your tech career journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-lg shadow-lg bg-primary hover:bg-primary/90">
                  <Link to="/register">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-lg border-primary/20">
                  <Link to="/interview" className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    Try AI Interview
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`} 
                        alt="User avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-primary font-bold">4,800+</span> tech professionals using our platform
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="glassmorphism dark:bg-black/30 rounded-2xl p-6 border border-primary/20 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Interview Analysis</h3>
                  <p className="text-sm text-muted-foreground">Real-time feedback on your responses and body language</p>
                  <Button variant="ghost" size="sm" asChild className="mt-4">
                    <Link to="/interview" className="flex items-center gap-1">
                      Try Now <ChevronRight size={14} />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="glassmorphism dark:bg-black/30 rounded-2xl p-6 border border-primary/20 shadow-xl mt-8"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <BarChart className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Skill Gap Analysis</h3>
                  <p className="text-sm text-muted-foreground">Discover your strengths and areas for improvement</p>
                  <Button variant="ghost" size="sm" asChild className="mt-4">
                    <Link to="/assessment" className="flex items-center gap-1">
                      Analyze Skills <ChevronRight size={14} />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="glassmorphism dark:bg-black/30 rounded-2xl p-6 border border-primary/20 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Learning Paths</h3>
                  <p className="text-sm text-muted-foreground">Customized courses based on your career goals</p>
                  <Button variant="ghost" size="sm" asChild className="mt-4">
                    <Link to="/learning" className="flex items-center gap-1">
                      Explore Paths <ChevronRight size={14} />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="glassmorphism dark:bg-black/30 rounded-2xl p-6 border border-primary/20 shadow-xl mt-8"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Expert Mentorship</h3>
                  <p className="text-sm text-muted-foreground">Connect with industry professionals for guidance</p>
                  <Button variant="ghost" size="sm" asChild className="mt-4">
                    <Link to="/mentors" className="flex items-center gap-1">
                      Find Mentors <ChevronRight size={14} />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-background/80 rounded-xl p-4 border border-primary/20 shadow-lg animate-float z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Interview Success Rate</p>
                    <p className="text-sm text-muted-foreground">+64% after just 3 sessions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 transform -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20 md:py-32 bg-background relative overflow-hidden"
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
              Our advanced AI technology provides personalized guidance to help you excel in your tech career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-6 w-6 text-primary" />,
                title: "AI Interview Simulator",
                description: "Practice with our AI interviewer that adapts in real-time to your responses, providing instant feedback on content, delivery, and body language."
              },
              {
                icon: <Brain className="h-6 w-6 text-primary" />,
                title: "Emotion AI Analysis",
                description: "Advanced AI evaluates your speech patterns, tone, and facial expressions to give personalized feedback for improvement."
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Skill Gap Analysis",
                description: "Our AI identifies your strengths and weaknesses, highlighting skills you need to develop for your target roles."
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Personalized Learning",
                description: "Get tailored course and certification recommendations from top platforms based on your skill gaps and career goals."
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Job Matching",
                description: "Smart job matching technology analyzes your profile to find roles that align with your skills, experience, and preferences."
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Mentor Connect",
                description: "Connect with industry mentors who can provide guidance, answer questions, and share insights from their experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 card-hover group"
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="px-6 py-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link to={feature.title.includes("Interview") ? "/interview" : 
                              feature.title.includes("Skill") ? "/assessment" :
                              feature.title.includes("Learning") ? "/learning" :
                              feature.title.includes("Job") ? "/resources" :
                              feature.title.includes("Mentor") ? "/mentors" : "/"} 
                          className="flex items-center gap-1">
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Enhanced Features Section */}
      <motion.section
        ref={newFeaturesRef}
        className="py-20 md:py-32 bg-primary/5 relative overflow-hidden"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Career Pathing Tool",
                description: "Map your career trajectory with precision, visualizing your path from current role to dream position with AI-recommended milestones.",
                buttonText: "Plan Your Path",
                link: "/assessment"
              },
              {
                icon: <Gem className="h-8 w-8 text-primary" />,
                title: "Skills Marketplace",
                description: "Showcase your verified skills to potential employers in our exclusive marketplace and receive job offers matching your expertise.",
                buttonText: "Join Marketplace",
                link: "/resources"
              },
              {
                icon: <Medal className="h-8 w-8 text-primary" />,
                title: "Certification Navigator",
                description: "Identify the most valuable certifications for your target role and access exclusive prep materials and discount vouchers.",
                buttonText: "Explore Certifications",
                link: "/learning"
              },
              {
                icon: <ThumbsUp className="h-8 w-8 text-primary" />,
                title: "Resume AI Enhancer",
                description: "Our AI reviews your resume in seconds, suggesting improvements to get past ATS systems and catch recruiters' attention.",
                buttonText: "Enhance Resume",
                link: "/resources"
              },
              {
                icon: <LifeBuoy className="h-8 w-8 text-primary" />,
                title: "Career Crisis Support",
                description: "Get emergency career advice from top coaches when facing layoffs, difficult workplace situations, or major career decisions.",
                buttonText: "Get Support",
                link: "/mentors"
              },
              {
                icon: <Gift className="h-8 w-8 text-primary" />,
                title: "Tech Salary Negotiator",
                description: "Enter a job offer and our AI generates a custom negotiation script with market data to help you secure the best compensation.",
                buttonText: "Negotiate Better",
                link: "/resources"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glassmorphism dark:bg-black/20 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button className="w-full" asChild>
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
        className="py-20 md:py-32 bg-primary/5"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-background overflow-hidden relative"
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
