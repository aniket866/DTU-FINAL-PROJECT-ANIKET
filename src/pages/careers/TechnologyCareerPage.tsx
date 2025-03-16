
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonitorSmartphone, Code, Server, Shield, Database, Globe, Cpu, ArrowRight } from 'lucide-react';

const TechnologyCareerPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const techRoles = [
    {
      title: "Software Development",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Design, build and maintain software applications and systems",
      skills: ["Programming Languages", "Algorithms", "Software Architecture", "Testing"],
      avgSalary: "$110,000",
      growth: "22%"
    },
    {
      title: "Cloud Computing",
      icon: <Server className="h-10 w-10 text-primary" />,
      description: "Design and implement cloud-based solutions and infrastructure",
      skills: ["AWS/Azure/GCP", "Virtualization", "Cloud Security", "Microservices"],
      avgSalary: "$125,000",
      growth: "15%"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-10 w-10 text-primary" />,
      description: "Protect systems, networks, and data from digital attacks",
      skills: ["Network Security", "Risk Assessment", "Cryptography", "Ethical Hacking"],
      avgSalary: "$120,000",
      growth: "31%"
    },
    {
      title: "Data Science",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Extract insights and knowledge from structured and unstructured data",
      skills: ["Machine Learning", "Statistics", "Data Visualization", "Python/R"],
      avgSalary: "$118,000",
      growth: "28%"
    },
    {
      title: "Web Development",
      icon: <Globe className="h-10 w-10 text-primary" />,
      description: "Create and maintain websites and web applications",
      skills: ["HTML/CSS", "JavaScript", "Frontend Frameworks", "Backend Development"],
      avgSalary: "$95,000",
      growth: "13%"
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: "Build intelligent systems that can learn from data and make decisions",
      skills: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision"],
      avgSalary: "$135,000",
      growth: "40%"
    }
  ];

  const techCertifications = [
    { name: "AWS Certified Solutions Architect", provider: "Amazon", level: "Associate/Professional" },
    { name: "Certified Information Systems Security Professional (CISSP)", provider: "ISC²", level: "Professional" },
    { name: "Google Cloud Professional Engineer", provider: "Google", level: "Professional" },
    { name: "Microsoft Azure Fundamentals/Administrator", provider: "Microsoft", level: "Beginner/Intermediate" },
    { name: "Certified Data Scientist", provider: "IBM", level: "Professional" },
    { name: "CompTIA Security+", provider: "CompTIA", level: "Entry-level" }
  ];

  return (
    <MainLayout>
      <div className="py-8">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 bg-primary/10 rounded-lg mb-4"
            >
              <MonitorSmartphone className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Technology Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore high-demand roles, career paths, and resources in the technology sector
            </motion.p>
          </div>

          <Tabs defaultValue="roles" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="roles">Career Roles</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roles">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {techRoles.map((role, index) => (
                  <motion.div key={index} variants={itemVariants} className="card-hover">
                    <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="p-2 rounded-lg bg-primary/10 mb-3">
                            {role.icon}
                          </div>
                          <Badge className="bg-primary text-white">{role.growth} growth</Badge>
                        </div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <CardDescription>{role.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="bg-primary/5">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border/30">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Avg. Salary</span>
                            <span className="font-semibold">{role.avgSalary}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full group">
                          <span>Explore Career Path</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="paths">
              <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Technology Learning Paths</CardTitle>
                    <CardDescription>Guided learning journeys for tech professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Code className="h-5 w-5 text-primary" /> Software Development Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Foundations of Programming</h4>
                            <p className="text-muted-foreground text-sm">Learn syntax, data structures, and algorithms</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Web Development Fundamentals</h4>
                            <p className="text-muted-foreground text-sm">HTML, CSS, JavaScript and basic frameworks</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Backend Development</h4>
                            <p className="text-muted-foreground text-sm">APIs, databases, and server architecture</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">DevOps & Cloud Integration</h4>
                            <p className="text-muted-foreground text-sm">CI/CD, containerization, and deployment</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" /> Cybersecurity Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Network Security Fundamentals</h4>
                            <p className="text-muted-foreground text-sm">Basic networking and security principles</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Security Operations</h4>
                            <p className="text-muted-foreground text-sm">Monitoring, incident response, and threat analysis</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Ethical Hacking</h4>
                            <p className="text-muted-foreground text-sm">Penetration testing and vulnerability assessment</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Security Architecture</h4>
                            <p className="text-muted-foreground text-sm">Designing secure systems and infrastructure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                      View All Learning Paths
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="certifications">
              <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Technology Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to boost your career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {techCertifications.map((cert, index) => (
                        <div key={index} className="p-4 rounded-lg border border-border/30 hover:bg-primary/5 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{cert.name}</h3>
                              <p className="text-sm text-muted-foreground">Provider: {cert.provider}</p>
                            </div>
                            <Badge variant="outline">{cert.level}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Explore Certification Paths
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnologyCareerPage;
