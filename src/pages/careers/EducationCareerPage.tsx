import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Users, Presentation, Brain, PenTool, ArrowRight } from 'lucide-react';

const EducationCareerPage = () => {
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

  const educationRoles = [
    {
      title: "Teacher",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      description: "Educate students in various subjects and grade levels",
      skills: ["Curriculum Development", "Classroom Management", "Student Assessment", "Communication"],
      avgSalary: "$65,000",
      growth: "4%"
    },
    {
      title: "School Administrator",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      description: "Manage school operations and support teachers and students",
      skills: ["Leadership", "Budget Management", "Policy Implementation", "Conflict Resolution"],
      avgSalary: "$90,000",
      growth: "6%"
    },
    {
      title: "Educational Consultant",
      icon: <Brain className="h-10 w-10 text-primary" />,
      description: "Provide expert advice to improve educational programs and practices",
      skills: ["Program Evaluation", "Data Analysis", "Curriculum Design", "Training"],
      avgSalary: "$80,000",
      growth: "8%"
    },
    {
      title: "Special Education Teacher",
      icon: <Users className="h-10 w-10 text-primary" />,
      description: "Teach students with special needs and develop individualized education plans",
      skills: ["IEP Development", "Adaptive Teaching", "Behavior Management", "Patience"],
      avgSalary: "$62,000",
      growth: "5%"
    },
    {
      title: "Instructional Designer",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      description: "Design and develop engaging and effective learning materials",
      skills: ["E-Learning", "Multimedia Design", "Assessment Design", "Project Management"],
      avgSalary: "$75,000",
      growth: "9%"
    },
    {
      title: "Corporate Trainer",
      icon: <Presentation className="h-10 w-10 text-primary" />,
      description: "Conduct training programs for employees to enhance their skills and knowledge",
      skills: ["Training Delivery", "Needs Assessment", "Content Creation", "Evaluation"],
      avgSalary: "$70,000",
      growth: "7%"
    }
  ];

  const educationCertifications = [
    { name: "National Board Certification", provider: "NBPTS", level: "Advanced" },
    { name: "Teaching Certificates", provider: "State Departments of Education", level: "Entry/Mid" },
    { name: "Certified Professional in Training and Development (CPTD)", provider: "ATD", level: "Professional" },
    { name: "Certified Academic Language Therapist (CALT)", provider: "ALTA", level: "Specialized" },
    { name: "Google Certified Educator", provider: "Google", level: "Beginner/Intermediate" },
    { name: "Online Teaching Certificate", provider: "Various", level: "Beginner/Intermediate" }
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
              <GraduationCap className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Education Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in teaching, administration, and educational consulting
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
                {educationRoles.map((role, index) => (
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
                    <CardTitle>Education Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for education professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" /> Teaching Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Educational Foundations</h4>
                            <p className="text-muted-foreground text-sm">Learning theories, child development, and classroom management</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Curriculum Design</h4>
                            <p className="text-muted-foreground text-sm">Developing engaging and effective lesson plans</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Assessment Strategies</h4>
                            <p className="text-muted-foreground text-sm">Evaluating student learning and providing feedback</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Advanced Teaching Methods</h4>
                            <p className="text-muted-foreground text-sm">Differentiated instruction and inclusive education</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" /> Leadership & Administration Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Educational Leadership</h4>
                            <p className="text-muted-foreground text-sm">Leadership styles, school culture, and change management</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">School Management</h4>
                            <p className="text-muted-foreground text-sm">Budgeting, resource allocation, and policy implementation</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Human Resources</h4>
                            <p className="text-muted-foreground text-sm">Teacher recruitment, evaluation, and professional development</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Strategic Planning</h4>
                            <p className="text-muted-foreground text-sm">Setting goals, analyzing data, and improving school performance</p>
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
                    <CardTitle>Popular Education Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to advance your education career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {educationCertifications.map((cert, index) => (
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

export default EducationCareerPage;
