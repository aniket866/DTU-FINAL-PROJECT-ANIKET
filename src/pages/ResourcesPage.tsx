
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Video, Tool, Download, Book, Code, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  // Sample resources data
  const articles = [
    {
      id: 1,
      title: "How to Ace Your Technical Interview",
      date: "June 10, 2023",
      description: "Learn the most effective strategies for preparing and performing well in technical interviews. This guide covers common questions, problem-solving approaches, and tips for effective communication.",
      image: "/lovable-uploads/9e8b8b2f-c2d5-4df7-822e-4e8d148604c2.png",
      link: "/resources/technical-interview-guide"
    },
    {
      id: 2,
      title: "Building Your Tech Resume",
      date: "July 5, 2023",
      description: "A complete guide to crafting a standout technical resume that will catch the attention of hiring managers and help you land interviews at top tech companies.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&h=500&fit=crop",
      link: "/resources/tech-resume-guide"
    },
    {
      id: 3,
      title: "Mastering System Design Interviews",
      date: "August 15, 2023",
      description: "System design interviews are critical for senior roles. This comprehensive guide breaks down the approach to tackle any system design question with confidence.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500&h=500&fit=crop",
      link: "/resources/system-design-guide"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Navigating Career Transitions",
      date: "June 25, 2023",
      time: "2:00 PM EST",
      description: "Join industry experts as they discuss strategies for successfully transitioning between different roles or industries. Learn how to leverage your existing skills and identify learning opportunities.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=500&fit=crop",
      link: "/webinars/career-transitions"
    },
    {
      id: 2,
      title: "Machine Learning Career Paths",
      date: "July 12, 2023",
      time: "3:00 PM EST",
      description: "Discover the different career trajectories in the rapidly growing field of machine learning, from research positions to applied ML engineering roles.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb999e2893?w=500&h=500&fit=crop",
      link: "/webinars/ml-career-paths"
    }
  ];

  const tools = [
    {
      id: 1,
      title: "Resume Builder",
      description: "Use our AI-powered resume builder to create a professional, ATS-friendly resume that highlights your skills and experiences effectively.",
      icon: <FileText className="h-10 w-10 text-primary" />,
      link: "/tools/resume-builder"
    },
    {
      id: 2,
      title: "Salary Calculator",
      description: "Get accurate salary estimates based on your role, experience, location, and industry. Compare compensation packages and negotiate better offers.",
      icon: <BarChart className="h-10 w-10 text-primary" />,
      link: "/tools/salary-calculator"
    },
    {
      id: 3,
      title: "Interview Simulator",
      description: "Practice with our AI interviewer that adapts to your responses, providing instant feedback to help you improve your interview skills.",
      icon: <Video className="h-10 w-10 text-primary" />,
      link: "/interview"
    },
    {
      id: 4,
      title: "Code Challenges",
      description: "Sharpen your coding skills with our collection of challenges designed to prepare you for technical interviews at top companies.",
      icon: <Code className="h-10 w-10 text-primary" />,
      link: "/tools/code-challenges"
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Career Resources</h1>
          <p className="text-muted-foreground">Access our collection of articles, guides, and tools to help advance your career.</p>
        </div>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="mb-6 w-full sm:w-auto">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <Book size={16} />
              Articles
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex items-center gap-2">
              <Video size={16} />
              Webinars
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Tool size={16} />
              Tools
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>Published: {article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">
                      {article.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to={article.link}>
                      <Button variant="outline" className="gap-2 text-primary hover:text-primary-foreground hover:bg-primary">
                        Read More <ExternalLink size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="webinars" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={webinar.image} 
                      alt={webinar.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{webinar.title}</CardTitle>
                    <CardDescription>{webinar.date} - {webinar.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">
                      {webinar.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to={webinar.link}>
                      <Button className="gap-2">
                        Register Now <ExternalLink size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <Card key={tool.id} className="border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                  <CardHeader className="flex flex-row items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle>{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      {tool.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to={tool.link}>
                      <Button className="gap-2">
                        Launch Tool <ExternalLink size={16} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
