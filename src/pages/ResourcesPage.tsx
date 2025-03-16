
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Code, Youtube, BookOpen, Lightbulb, BookMarked, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample resource data
const resourceCategories = [
  {
    title: "Documentation",
    description: "Official documentation and reference guides",
    icon: <FileText className="h-8 w-8 text-primary" />,
    resources: [
      { title: "React Documentation", description: "Official React documentation and guides", link: "https://react.dev" },
      { title: "TypeScript Handbook", description: "Comprehensive TypeScript reference", link: "https://www.typescriptlang.org/docs/" },
      { title: "MDN Web Docs", description: "Resources for web developers", link: "https://developer.mozilla.org" },
    ]
  },
  {
    title: "Code Examples",
    description: "Real-world code examples and repositories",
    icon: <Code className="h-8 w-8 text-primary" />,
    resources: [
      { title: "GitHub Repositories", description: "Top open-source React projects", link: "#" },
      { title: "CodeSandbox Templates", description: "Ready-to-use React templates", link: "#" },
      { title: "Stack Overflow Solutions", description: "Common coding problems solved", link: "#" },
    ]
  },
  {
    title: "Video Tutorials",
    description: "In-depth video courses and tutorials",
    icon: <Youtube className="h-8 w-8 text-primary" />,
    resources: [
      { title: "React Crash Course", description: "Complete intro to React", link: "#" },
      { title: "Advanced TypeScript", description: "Master TypeScript features", link: "#" },
      { title: "Full Stack Development", description: "End-to-end application building", link: "#" },
    ]
  },
  {
    title: "Books",
    description: "Essential reading for developers",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    resources: [
      { title: "React Design Patterns", description: "Best practices and patterns", link: "#" },
      { title: "TypeScript in Action", description: "Real-world TypeScript usage", link: "#" },
      { title: "Modern JavaScript", description: "ES6+ and beyond", link: "#" },
    ]
  },
  {
    title: "Articles",
    description: "Blogs and articles on latest trends",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    resources: [
      { title: "State Management in 2023", description: "Modern approaches to state", link: "#" },
      { title: "Performance Optimization", description: "Speed up your React apps", link: "#" },
      { title: "Accessibility Guide", description: "Building inclusive applications", link: "#" },
    ]
  },
  {
    title: "Cheat Sheets",
    description: "Quick reference guides and cheat sheets",
    icon: <BookMarked className="h-8 w-8 text-primary" />,
    resources: [
      { title: "React Hooks Reference", description: "All hooks explained", link: "#" },
      { title: "TypeScript Types", description: "Common types and usage", link: "#" },
      { title: "CSS Grid & Flexbox", description: "Layout cheat sheet", link: "#" },
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
            Developer Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated collection of high-quality resources to help you excel in your career
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {resourceCategories.map((category, index) => (
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
