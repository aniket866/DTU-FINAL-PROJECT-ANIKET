
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hammer, HardHat, Factory, Cog, Cpu, Wrench, Workflow, ArrowRight } from 'lucide-react';

const EngineeringCareerPage = () => {
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

  const engineeringRoles = [
    {
      title: "Civil Engineering",
      icon: <HardHat className="h-10 w-10 text-primary" />,
      description: "Design and oversee construction of infrastructure projects like buildings, roads, and bridges",
      skills: ["Structural Analysis", "Site Planning", "Project Management", "AutoCAD"],
      avgSalary: "$95,000",
      growth: "7%"
    },
    {
      title: "Mechanical Engineering",
      icon: <Cog className="h-10 w-10 text-primary" />,
      description: "Design and develop mechanical systems and machinery for various industries",
      skills: ["3D Modeling", "Thermodynamics", "Material Science", "HVAC Design"],
      avgSalary: "$92,000",
      growth: "9%"
    },
    {
      title: "Electrical Engineering",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: "Design and develop electrical systems, from power generation to electronic devices",
      skills: ["Circuit Design", "Power Systems", "Control Systems", "Signal Processing"],
      avgSalary: "$105,000",
      growth: "8%"
    },
    {
      title: "Manufacturing Engineering",
      icon: <Factory className="h-10 w-10 text-primary" />,
      description: "Optimize production processes and develop efficient manufacturing systems",
      skills: ["Process Optimization", "Lean Manufacturing", "Quality Control", "Automation"],
      avgSalary: "$88,000",
      growth: "6%"
    },
    {
      title: "Systems Engineering",
      icon: <Workflow className="h-10 w-10 text-primary" />,
      description: "Design and manage complex systems throughout their lifecycle",
      skills: ["Systems Thinking", "Requirements Analysis", "Integration", "Testing"],
      avgSalary: "$110,000",
      growth: "11%"
    },
    {
      title: "Industrial Engineering",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      description: "Optimize complex processes or systems to eliminate waste and improve efficiency",
      skills: ["Process Analysis", "Ergonomics", "Operations Research", "Logistics"],
      avgSalary: "$90,000",
      growth: "8%"
    }
  ];

  const engineeringCertifications = [
    { name: "Professional Engineer (PE)", provider: "NCEES", level: "Professional" },
    { name: "Certified Manufacturing Engineer (CMfgE)", provider: "SME", level: "Professional" },
    { name: "Project Management Professional (PMP)", provider: "PMI", level: "Professional" },
    { name: "Certified Energy Manager (CEM)", provider: "AEE", level: "Professional" },
    { name: "Certified Reliability Engineer (CRE)", provider: "ASQ", level: "Professional" },
    { name: "Certified Systems Engineering Professional (CSEP)", provider: "INCOSE", level: "Professional" }
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
              <Hammer className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in civil, mechanical, electrical and other engineering fields
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
                {engineeringRoles.map((role, index) => (
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
                    <CardTitle>Engineering Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for engineering professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <HardHat className="h-5 w-5 text-primary" /> Civil Engineering Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Engineering Fundamentals</h4>
                            <p className="text-muted-foreground text-sm">Mathematics, physics, and basic engineering principles</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Structural Analysis</h4>
                            <p className="text-muted-foreground text-sm">Material strength, structural design, and analysis techniques</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Construction Management</h4>
                            <p className="text-muted-foreground text-sm">Project planning, scheduling, and construction oversight</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Infrastructure Design</h4>
                            <p className="text-muted-foreground text-sm">Advanced design techniques for major infrastructure projects</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Cog className="h-5 w-5 text-primary" /> Mechanical Engineering Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Mechanical Principles</h4>
                            <p className="text-muted-foreground text-sm">Statics, dynamics, and mechanics of materials</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Thermal Systems</h4>
                            <p className="text-muted-foreground text-sm">Thermodynamics, heat transfer, and fluid mechanics</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Design & Modeling</h4>
                            <p className="text-muted-foreground text-sm">CAD/CAM systems and mechanical design principles</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Advanced Applications</h4>
                            <p className="text-muted-foreground text-sm">Robotics, automation, and specialized mechanical systems</p>
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
                    <CardTitle>Popular Engineering Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to advance your engineering career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {engineeringCertifications.map((cert, index) => (
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

export default EngineeringCareerPage;
