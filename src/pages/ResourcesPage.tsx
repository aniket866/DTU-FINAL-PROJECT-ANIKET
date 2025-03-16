
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Code, Youtube, BookOpen, Lightbulb, BookMarked, Briefcase, Stethoscope, GraduationCap, Scale, Hammer, Leaf, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Updated resource data for multiple career fields
const careerCategories = [
  {
    title: "Technology & IT",
    description: "Resources for tech and IT professionals",
    icon: <Code className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Programming Fundamentals", description: "Learn coding basics across languages", link: "#" },
      { title: "Cloud Computing Guide", description: "AWS, Azure, and Google Cloud resources", link: "#" },
      { title: "Cybersecurity Essentials", description: "Protect digital assets and data", link: "#" },
    ]
  },
  {
    title: "Healthcare",
    description: "Resources for medical professionals",
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Medical Certification Paths", description: "Guide to healthcare certifications", link: "#" },
      { title: "Patient Care Resources", description: "Improving healthcare delivery", link: "#" },
      { title: "Healthcare Administration", description: "Managing medical facilities", link: "#" },
    ]
  },
  {
    title: "Business & Finance",
    description: "Resources for business professionals",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Financial Analysis", description: "Understanding business metrics", link: "#" },
      { title: "Project Management", description: "Leading teams effectively", link: "#" },
      { title: "Business Strategy", description: "Planning for organizational success", link: "#" },
    ]
  },
  {
    title: "Education",
    description: "Resources for teaching professionals",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Teaching Methodologies", description: "Effective classroom strategies", link: "#" },
      { title: "Educational Technology", description: "Digital tools for modern education", link: "#" },
      { title: "Curriculum Development", description: "Design impactful learning experiences", link: "#" },
    ]
  },
  {
    title: "Legal",
    description: "Resources for legal professionals",
    icon: <Scale className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Legal Research Methods", description: "Effective case preparation", link: "#" },
      { title: "Contract Law Essentials", description: "Understanding legal agreements", link: "#" },
      { title: "Legal Ethics", description: "Professional conduct in law", link: "#" },
    ]
  },
  {
    title: "Engineering",
    description: "Resources for engineering fields",
    icon: <Hammer className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Civil Engineering Fundamentals", description: "Infrastructure development", link: "#" },
      { title: "Mechanical Design Principles", description: "Creating efficient systems", link: "#" },
      { title: "Electrical Engineering", description: "Power and electronics basics", link: "#" },
    ]
  },
  {
    title: "Creative Arts",
    description: "Resources for artists and designers",
    icon: <Palette className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Digital Design Fundamentals", description: "Creating visual content", link: "#" },
      { title: "Creative Portfolio Building", description: "Showcase your artistic work", link: "#" },
      { title: "Art Marketing Strategies", description: "Promoting creative services", link: "#" },
    ]
  },
  {
    title: "Environmental Science",
    description: "Resources for environmental work",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Sustainability Practices", description: "Implementing green initiatives", link: "#" },
      { title: "Environmental Assessment", description: "Evaluating ecological impact", link: "#" },
      { title: "Conservation Biology", description: "Protecting natural resources", link: "#" },
    ]
  },
  {
    title: "General Career Resources",
    description: "Universal professional development",
    icon: <BookMarked className="h-8 w-8 text-primary" />,
    resources: [
      { title: "Resume Writing Guide", description: "Craft an effective CV", link: "#" },
      { title: "Interview Preparation", description: "Ace your next job interview", link: "#" },
      { title: "Networking Strategies", description: "Build professional connections", link: "#" },
    ]
  }
];

const ResourcesPage = () => {
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
            Career Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated collection of high-quality resources for professionals across various fields
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {careerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover"
            >
              <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-2 rounded-lg bg-primary/10 mb-3">
                      {category.icon}
                    </div>
                    <Badge variant="outline" className="bg-primary/5">
                      {category.resources.length} resources
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-3">
                    {category.resources.map((resource, idx) => (
                      <li key={idx} className="border-b border-border/30 pb-3 last:border-0">
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group block hover:bg-primary/5 rounded-lg p-2 -m-2 transition-colors"
                        >
                          <div className="font-medium group-hover:text-primary transition-colors">{resource.title}</div>
                          <div className="text-sm text-muted-foreground">{resource.description}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group">
                    <span>View All Resources</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
