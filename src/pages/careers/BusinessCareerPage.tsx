
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, TrendingUp, BarChart3, PieChart, Users, LineChart, LucideIcon, ArrowRight, Building2, ChartPie, BadgeDollarSign, GanttChart, BarChart } from 'lucide-react';

const BusinessCareerPage = () => {
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

  const businessRoles = [
    {
      title: "Business Strategy",
      icon: <ChartPie className="h-10 w-10 text-primary" />,
      description: "Develop and implement strategic plans to achieve organizational goals",
      skills: ["Strategic Planning", "Market Analysis", "Competitive Intelligence", "Decision Making"],
      avgSalary: "$105,000",
      growth: "11%"
    },
    {
      title: "Operations Management",
      icon: <GanttChart className="h-10 w-10 text-primary" />,
      description: "Oversee daily operations and improve organizational efficiency",
      skills: ["Process Optimization", "Supply Chain", "Resource Management", "Quality Control"],
      avgSalary: "$95,000",
      growth: "9%"
    },
    {
      title: "Management Consulting",
      icon: <Users className="h-10 w-10 text-primary" />,
      description: "Provide expert advice to help organizations improve performance",
      skills: ["Problem Solving", "Business Analysis", "Change Management", "Client Management"],
      avgSalary: "$120,000",
      growth: "14%"
    },
    {
      title: "Entrepreneurship",
      icon: <Building2 className="h-10 w-10 text-primary" />,
      description: "Start and grow innovative businesses that address market needs",
      skills: ["Business Planning", "Leadership", "Risk Management", "Financial Acumen"],
      avgSalary: "Variable",
      growth: "8%"
    },
    {
      title: "Business Analysis",
      icon: <BarChart className="h-10 w-10 text-primary" />,
      description: "Identify business needs and develop data-driven solutions",
      skills: ["Data Analysis", "Requirements Gathering", "Process Modeling", "Stakeholder Management"],
      avgSalary: "$90,000",
      growth: "13%"
    },
    {
      title: "Corporate Finance",
      icon: <BadgeDollarSign className="h-10 w-10 text-primary" />,
      description: "Manage company finances and make strategic investment decisions",
      skills: ["Financial Analysis", "Budgeting", "Investment Analysis", "Risk Assessment"],
      avgSalary: "$115,000",
      growth: "10%"
    }
  ];

  const businessCertifications = [
    { name: "Certified Business Analysis Professional (CBAP)", provider: "IIBA", level: "Professional" },
    { name: "Project Management Professional (PMP)", provider: "PMI", level: "Professional" },
    { name: "Certified Management Consultant (CMC)", provider: "IMC", level: "Professional" },
    { name: "Certified Supply Chain Professional (CSCP)", provider: "ASCM", level: "Intermediate" },
    { name: "Chartered Financial Analyst (CFA)", provider: "CFA Institute", level: "Professional" },
    { name: "Six Sigma Green/Black Belt", provider: "ASQ", level: "Intermediate/Advanced" }
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
              <Briefcase className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Business Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities, paths, and resources in business and management
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
                {businessRoles.map((role, index) => (
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
                    <CardTitle>Business Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for business professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <ChartPie className="h-5 w-5 text-primary" /> Strategy & Management Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Business Fundamentals</h4>
                            <p className="text-muted-foreground text-sm">Core business concepts and management principles</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Strategic Thinking</h4>
                            <p className="text-muted-foreground text-sm">Market analysis and strategic planning methods</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Leadership Development</h4>
                            <p className="text-muted-foreground text-sm">Team management and organizational leadership</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Executive Management</h4>
                            <p className="text-muted-foreground text-sm">Cross-functional leadership and change management</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <BadgeDollarSign className="h-5 w-5 text-primary" /> Finance & Analytics Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Financial Foundations</h4>
                            <p className="text-muted-foreground text-sm">Accounting, financial statements, and budgeting</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Business Analysis</h4>
                            <p className="text-muted-foreground text-sm">Data analysis, business intelligence, and metrics</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Financial Management</h4>
                            <p className="text-muted-foreground text-sm">Investment analysis, risk management, and valuation</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Corporate Finance</h4>
                            <p className="text-muted-foreground text-sm">M&A, capital structure, and strategic financial planning</p>
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
                    <CardTitle>Popular Business Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to boost your business career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {businessCertifications.map((cert, index) => (
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

export default BusinessCareerPage;
