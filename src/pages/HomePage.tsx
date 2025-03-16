
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  UserCheck, 
  BookOpen, 
  Briefcase, 
  Brain, 
  Users, 
  Award, 
  TrendingUp, 
  Video, 
  ChevronRight,
  Zap,
  Layers,
  BarChart,
  Smile,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

// Framer motion variants
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

const HomePage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <MainLayout fullWidth noPadding>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-32 pb-20 md:pt-40 md:pb-32"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            variants={fadeIn}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">AI-Powered Career Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Accelerate Your Career With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient-shift bg-[length:200%_auto]">AI Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get personalized career guidance, AI interview practice, skill gap analysis, 
              and learning recommendations all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full shadow-lg">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <Link to="/interview">Try AI Interview</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 md:mt-16 relative mx-auto max-w-6xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Career Coach Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-left">
                  <p className="font-medium">Interview Completed</p>
                  <p className="text-sm text-muted-foreground">Score: 92% - Excellent!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 transform -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20 md:py-32 bg-background"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Career Development</h2>
            <p className="text-xl text-muted-foreground">
              Our advanced AI technology provides personalized guidance and tools to help you excel in your career journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-6 w-6 text-violet-500" />,
                title: "AI Interview Simulator",
                description: "Practice with our AI interviewer that adapts in real-time to your responses, providing instant feedback on content, delivery, and body language."
              },
              {
                icon: <Brain className="h-6 w-6 text-indigo-500" />,
                title: "Emotion AI Analysis",
                description: "Advanced AI evaluates your speech patterns, tone, and facial expressions to give personalized feedback for improvement."
              },
              {
                icon: <UserCheck className="h-6 w-6 text-blue-500" />,
                title: "Skill Gap Analysis",
                description: "Our AI identifies your strengths and weaknesses, highlighting skills you need to develop for your target roles."
              },
              {
                icon: <BookOpen className="h-6 w-6 text-cyan-500" />,
                title: "Personalized Learning",
                description: "Get tailored course and certification recommendations from top platforms based on your skill gaps and career goals."
              },
              {
                icon: <Briefcase className="h-6 w-6 text-teal-500" />,
                title: "Job Matching",
                description: "Smart job matching technology analyzes your profile to find roles that align with your skills, experience, and preferences."
              },
              {
                icon: <Users className="h-6 w-6 text-green-500" />,
                title: "Mentor Connect",
                description: "Connect with industry mentors who can provide guidance, answer questions, and share insights from their experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1 card-hover"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.6 } }
            }}
          >
            <Button asChild className="rounded-full">
              <Link to="/interview" className="flex items-center">
                Explore All Features <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-primary/5"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 md:py-32 bg-background"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
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
                className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1 card-hover"
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
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
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
        className="py-20 md:py-32 bg-primary/5 overflow-hidden relative"
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
              <Button size="lg" asChild className="rounded-full shadow-lg">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <Link to="/interview">Try AI Interview</Link>
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
