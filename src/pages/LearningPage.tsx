
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Code, Database, Monitor, Brain, Server, BookOpen, PenTool, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningPage = () => {
  const courseCategories = [
    {
      id: "technical",
      name: "Technical Skills",
      icon: <Code className="h-5 w-5" />,
      description: "Courses and resources to improve your technical abilities."
    },
    {
      id: "soft-skills",
      name: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      description: "Resources to enhance your communication and leadership abilities."
    },
    {
      id: "data-science",
      name: "Data Science",
      icon: <Database className="h-5 w-5" />,
      description: "Learn data analysis, machine learning, and statistical methods."
    },
    {
      id: "design",
      name: "Design",
      icon: <PenTool className="h-5 w-5" />,
      description: "UX/UI design principles and tools for creating great user experiences."
    }
  ];
  
  const courses = {
    "technical": [
      {
        id: 1,
        title: "Introduction to Python Programming",
        description: "Learn Python fundamentals including syntax, data structures, functions, and object-oriented programming.",
        level: "Beginner",
        duration: "6 weeks",
        instructor: "Dr. Julia Chen",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=350&fit=crop",
        link: "/learning/python-intro"
      },
      {
        id: 2,
        title: "Web Development Fundamentals",
        description: "Master HTML, CSS, and JavaScript to build responsive and interactive websites from scratch.",
        level: "Beginner",
        duration: "8 weeks",
        instructor: "Mark Thompson",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=350&fit=crop",
        link: "/learning/web-dev-fundamentals"
      },
      {
        id: 3,
        title: "Advanced React Development",
        description: "Deep dive into React hooks, context API, performance optimization, and state management libraries.",
        level: "Intermediate",
        duration: "5 weeks",
        instructor: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=350&fit=crop",
        link: "/learning/advanced-react"
      }
    ],
    "soft-skills": [
      {
        id: 4,
        title: "Effective Communication",
        description: "Develop clear and impactful communication skills for technical and non-technical audiences.",
        level: "All Levels",
        duration: "4 weeks",
        instructor: "Dr. Michael Stevens",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&h=350&fit=crop",
        link: "/learning/effective-communication"
      },
      {
        id: 5,
        title: "Leadership Principles",
        description: "Learn essential leadership skills to guide teams and manage projects effectively in tech environments.",
        level: "Intermediate",
        duration: "6 weeks",
        instructor: "Elena Martinez",
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=500&h=350&fit=crop",
        link: "/learning/leadership"
      },
      {
        id: 6,
        title: "Problem Solving Techniques",
        description: "Master strategic approaches to complex problem-solving using proven frameworks and methodologies.",
        level: "All Levels",
        duration: "4 weeks",
        instructor: "David Wilson",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=350&fit=crop",
        link: "/learning/problem-solving"
      }
    ],
    "data-science": [
      {
        id: 7,
        title: "Data Science Essentials",
        description: "Introduction to key concepts in data science, including data wrangling, visualization, and basic modeling.",
        level: "Beginner",
        duration: "8 weeks",
        instructor: "Dr. Aisha Patel",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
        link: "/learning/data-science-essentials"
      },
      {
        id: 8,
        title: "Machine Learning Fundamentals",
        description: "Learn core machine learning algorithms and how to apply them to real-world problems.",
        level: "Intermediate",
        duration: "10 weeks",
        instructor: "Prof. Robert Kim",
        image: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&h=350&fit=crop",
        link: "/learning/ml-fundamentals"
      }
    ],
    "design": [
      {
        id: 9,
        title: "UX Design Principles",
        description: "Learn user-centered design methods, usability testing, and creating effective user experiences.",
        level: "Beginner",
        duration: "6 weeks",
        instructor: "Jessica Moore",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
        link: "/learning/ux-design"
      },
      {
        id: 10,
        title: "UI Design with Figma",
        description: "Master Figma to create beautiful, functional interfaces with modern design systems.",
        level: "Intermediate",
        duration: "5 weeks",
        instructor: "Alex Zhang",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=350&fit=crop",
        link: "/learning/figma-ui-design"
      }
    ]
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
          <p className="text-muted-foreground">Personalized learning recommendations based on your skills and goals.</p>
        </div>
        
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="mb-6 w-full sm:w-auto grid grid-cols-2 md:flex md:flex-row gap-1">
            {courseCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {courseCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <p className="text-muted-foreground">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses[category.id as keyof typeof courses].map((course) => (
                  <Card key={course.id} className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <BookOpen size={14} />
                        {course.duration} • {course.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2 text-sm">
                        {course.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link to={course.link}>
                        <Button className="w-full gap-2">
                          Start Learning <ExternalLink size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default LearningPage;
