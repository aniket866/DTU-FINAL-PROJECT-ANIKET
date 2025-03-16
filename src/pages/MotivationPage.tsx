
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Award, Target, Compass, Star, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const motivationalVideos = [
  {
    title: "The Power of Persistence",
    description: "Why persistence is the key to achieving your programming goals",
    thumbnail: "https://img.youtube.com/vi/KyTun6_Z9TM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=KyTun6_Z9TM",
    duration: "12:45",
    author: "TechMotivator"
  },
  {
    title: "From Beginner to Pro",
    description: "The journey of becoming a professional developer",
    thumbnail: "https://img.youtube.com/vi/6avJHaC3C2U/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=6avJHaC3C2U",
    duration: "18:23",
    author: "CodeJourney"
  },
  {
    title: "Overcoming Imposter Syndrome",
    description: "How to deal with feelings of inadequacy in tech",
    thumbnail: "https://img.youtube.com/vi/vm2S1-IRQbg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=vm2S1-IRQbg",
    duration: "15:10",
    author: "DevMindset"
  },
  {
    title: "The Art of Problem Solving",
    description: "Developing a mindset for tackling complex coding challenges",
    thumbnail: "https://img.youtube.com/vi/N-Pb6aMNEF4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=N-Pb6aMNEF4",
    duration: "20:34",
    author: "CodeMaster"
  },
  {
    title: "Building Your Career in Tech",
    description: "Strategic approaches to advancing your development career",
    thumbnail: "https://img.youtube.com/vi/rRuQdtzVxXE/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=rRuQdtzVxXE",
    duration: "25:16",
    author: "TechPathways"
  },
  {
    title: "Finding Your Coding Passion",
    description: "How to discover the programming niche that excites you",
    thumbnail: "https://img.youtube.com/vi/5JZ-rGKMokM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=5JZ-rGKMokM",
    duration: "14:52",
    author: "CodeEnthusiast"
  }
];

const inspirationalQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    quote: "It's not about being the best. It's about being better than you were yesterday.",
    author: "Anonymous",
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    icon: <Compass className="h-6 w-6 text-primary" />
  },
  {
    quote: "Every expert was once a beginner.",
    author: "Helen Hayes",
    icon: <Star className="h-6 w-6 text-primary" />
  },
];

const MotivationPage = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Career Motivation
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Inspiration and guidance to help you excel in your tech career journey
          </motion.p>
        </div>

        {/* Inspirational Quotes Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold mb-8 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="h-6 w-6 text-primary" />
              Words of Wisdom
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspirationalQuotes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-secondary/30 border-primary/10">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-2">
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="italic text-lg mb-4">"{item.quote}"</p>
                      <p className="text-sm text-muted-foreground">— {item.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Motivational Videos Section */}
        <section>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold mb-8 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Users className="h-6 w-6 text-primary" />
              Motivational Videos
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motivationalVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-hover"
                >
                  <Card className="h-full border-primary/10 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <a 
                          href={video.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary rounded-full p-3 hover:bg-primary/80 transition-colors"
                        >
                          <Play className="h-8 w-8 text-primary-foreground" />
                        </a>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/70">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">By {video.author}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href={video.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Watch Video
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Ready to advance your tech career?</h2>
            <p className="text-muted-foreground mb-8">
              Check out our learning paths and resources designed to help you achieve your career goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/learning">Explore Learning Paths</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <a href="/mentors">Find a Mentor</a>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default MotivationPage;
