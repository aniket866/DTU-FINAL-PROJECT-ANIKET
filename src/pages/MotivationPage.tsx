
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Play, ChevronRight, Clock, Eye, Award, Trophy, Lightbulb, Smile, Heart } from 'lucide-react';

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

const MotivationPage = () => {
  // Motivation videos data
  const motivationVideos = [
    {
      id: 1,
      title: "How to Ace Your Next Tech Interview",
      thumbnail: "https://img.youtube.com/vi/PJBNkCRNRH4/maxresdefault.jpg",
      youtubeId: "PJBNkCRNRH4",
      duration: "15:24",
      views: "1.2M",
      author: "Tech Career Coach",
      category: "Interview Prep"
    },
    {
      id: 2,
      title: "5 Steps to Land Your Dream Tech Job",
      thumbnail: "https://img.youtube.com/vi/waEsGu--9P8/maxresdefault.jpg",
      youtubeId: "waEsGu--9P8",
      duration: "12:45",
      views: "987K",
      author: "Career Insights",
      category: "Job Hunting"
    },
    {
      id: 3,
      title: "The Future of AI in Career Development",
      thumbnail: "https://img.youtube.com/vi/ORHv8yKGUHU/maxresdefault.jpg",
      youtubeId: "ORHv8yKGUHU",
      duration: "18:32",
      views: "1.5M",
      author: "AI Career Path",
      category: "Future Trends"
    },
    {
      id: 4,
      title: "From Junior to Senior Developer in 2 Years",
      thumbnail: "https://img.youtube.com/vi/F-7IS-fpV_U/maxresdefault.jpg",
      youtubeId: "F-7IS-fpV_U",
      duration: "22:15",
      views: "765K",
      author: "Dev Mastery",
      category: "Career Growth"
    },
    {
      id: 5,
      title: "Building Resilience in Tech Careers",
      thumbnail: "https://img.youtube.com/vi/oWmL6bjZRe4/maxresdefault.jpg",
      youtubeId: "oWmL6bjZRe4",
      duration: "16:48",
      views: "543K",
      author: "Tech Mindset",
      category: "Mental Health"
    },
    {
      id: 6,
      title: "How I Became a Tech Lead at Google",
      thumbnail: "https://img.youtube.com/vi/V_n3eSY4hp8/maxresdefault.jpg",
      youtubeId: "V_n3eSY4hp8",
      duration: "25:12",
      views: "2.3M",
      author: "Google Engineering",
      category: "Success Stories"
    }
  ];

  // Success stories data
  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Product Manager at Google",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "The AI interview practice was incredibly accurate. After just 5 sessions, I felt confident in my actual interviews and landed my dream job at Google."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer at Microsoft",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The skill gap analysis identified exactly what I needed to learn. The recommended courses helped me upskill quickly and stand out in a competitive job market."
    },
    {
      id: 3,
      name: "Jessica Rivera",
      role: "Marketing Director at Adobe",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      quote: "The AI feedback on my communication style was eye-opening. It helped me refine my presentation skills which has been crucial for my leadership role."
    }
  ];

  // Motivation quotes
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      icon: <Heart className="text-accent" />
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      icon: <Trophy className="text-primary" />
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      icon: <Lightbulb className="text-primary" />
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-12 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 z-0"></div>
        <motion.div 
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
            <Smile size={16} className="mr-2" />
            <span className="text-sm font-medium">Motivation & Inspiration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fuel Your Tech Career Journey</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Draw inspiration from success stories, expert advice, and motivational content designed to help you stay focused on your career goals.
          </p>
        </motion.div>
      </section>

      {/* Motivation Videos Section */}
      <motion.section
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div className="text-left max-w-3xl mb-10" variants={fadeIn}>
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
            <Youtube size={16} className="mr-2" />
            <span className="text-sm font-medium">Career Insights</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Tech Career Motivation</h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry experts and get inspired by success stories to fuel your career growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motivationVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Play fill="white" className="ml-1" />
                  </a>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock size={12} />
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {video.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{video.author}</span>
                  <span className="flex items-center gap-1"><Eye size={14} />{video.views} views</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Youtube size={16} />
                    Watch Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.6 } }
          }}
        >
          <Button asChild variant="outline" className="border-primary/20">
            <a 
              href="https://www.youtube.com/results?search_query=tech+career+advice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Youtube className="h-4 w-4" />
              Explore More Videos
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Quotes Section */}
      <section className="mb-20 bg-primary/5 py-16 rounded-xl">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Words of Wisdom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <Card key={index} className="bg-card/50 border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-background">
                      {quote.icon}
                    </div>
                  </div>
                  <p className="text-lg font-medium text-center mb-4">"{quote.text}"</p>
                  <p className="text-sm text-muted-foreground text-center">— {quote.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={fadeIn}>
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
            <Award size={16} className="mr-2" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">From Our Community</h2>
          <p className="text-lg text-muted-foreground">
            See how professionals like you have advanced their careers with our AI coaching platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card/30 dark:bg-black/20 rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-primary/10"
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
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="mb-8 bg-gradient-to-br from-accent/20 to-primary/20 p-10 rounded-xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to accelerate your tech career?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of professionals who are using AI to improve their skills, ace interviews, and land their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-lg shadow-lg">
              <a href="/interview">Try AI Interview <ChevronRight size={16} /></a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-lg">
              <a href="/assessment">Assess Your Skills <ChevronRight size={16} /></a>
            </Button>
          </div>
        </div>
      </motion.section>
    </MainLayout>
  );
};

export default MotivationPage;
