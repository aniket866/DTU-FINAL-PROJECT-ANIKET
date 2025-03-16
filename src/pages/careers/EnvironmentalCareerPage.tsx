
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Droplets, Wind, Trees, Mountain, Recycle, ArrowRight } from 'lucide-react';

const EnvironmentalCareerPage = () => {
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

  const environmentalRoles = [
    {
      title: "Environmental Scientist",
      icon: <Leaf className="h-10 w-10 text-primary" />,
      description: "Study environmental problems and develop solutions to protect the environment",
      skills: ["Environmental Sampling", "Data Analysis", "Risk Assessment", "Field Research"],
      avgSalary: "$76,000",
      growth: "15%"
    },
    {
      title: "Water Resource Specialist",
      icon: <Droplets className="h-10 w-10 text-primary" />,
      description: "Manage water resources and develop water conservation strategies",
      skills: ["Water Quality Analysis", "Hydrology", "Watershed Management", "GIS"],
      avgSalary: "$72,000",
      growth: "11%"
    },
    {
      title: "Renewable Energy Engineer",
      icon: <Wind className="h-10 w-10 text-primary" />,
      description: "Design and implement renewable energy systems and technologies",
      skills: ["Solar/Wind Technology", "Energy Modeling", "System Design", "Energy Storage"],
      avgSalary: "$85,000",
      growth: "22%"
    },
    {
      title: "Conservation Scientist",
      icon: <Trees className="h-10 w-10 text-primary" />,
      description: "Manage and protect natural resources and biodiversity",
      skills: ["Ecosystem Management", "Wildlife Biology", "Land Use Planning", "Conservation Policy"],
      avgSalary: "$68,000",
      growth: "8%"
    },
    {
      title: "Environmental Engineer",
      icon: <Mountain className="h-10 w-10 text-primary" />,
      description: "Develop solutions to environmental problems using engineering principles",
      skills: ["Pollution Control", "Remediation", "Environmental Impact Assessment", "Waste Management"],
      avgSalary: "$92,000",
      growth: "12%"
    },
    {
      title: "Sustainability Consultant",
      icon: <Recycle className="h-10 w-10 text-primary" />,
      description: "Help organizations implement sustainable practices and reduce environmental impact",
      skills: ["Carbon Footprint Analysis", "Sustainability Reporting", "Environmental Management", "Green Building"],
      avgSalary: "$78,000",
      growth: "18%"
    }
  ];

  const environmentalCertifications = [
    { name: "Certified Environmental Professional (CEP)", provider: "ABCEP", level: "Professional" },
    { name: "LEED Accredited Professional", provider: "USGBC", level: "Intermediate/Advanced" },
    { name: "Certified Hazardous Materials Manager (CHMM)", provider: "IHMM", level: "Professional" },
    { name: "Certified Energy Manager (CEM)", provider: "AEE", level: "Professional" },
    { name: "Professional Wetland Scientist (PWS)", provider: "SWS", level: "Professional" },
    { name: "Certified Environmental Systems Professional", provider: "NREP", level: "Professional" }
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
              <Leaf className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Environmental Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in sustainability, conservation, and environmental science
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
                {environmentalRoles.map((role, index) => (
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
                    <CardTitle>Environmental Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for environmental professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-primary" /> Environmental Science Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Environmental Foundations</h4>
                            <p className="text-muted-foreground text-sm">Ecology, earth science, and basic environmental principles</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Environmental Assessment</h4>
                            <p className="text-muted-foreground text-sm">Sampling techniques, data analysis, and risk assessment</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Environmental Management</h4>
                            <p className="text-muted-foreground text-sm">Natural resource management and policy implementation</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Environmental Leadership</h4>
                            <p className="text-muted-foreground text-sm">Developing and implementing environmental programs</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Recycle className="h-5 w-5 text-primary" /> Sustainability Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Sustainability Principles</h4>
                            <p className="text-muted-foreground text-sm">Environmental, social, and economic aspects of sustainability</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Sustainable Design</h4>
                            <p className="text-muted-foreground text-sm">Green building, sustainable products, and circular economy</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Corporate Sustainability</h4>
                            <p className="text-muted-foreground text-sm">ESG reporting, carbon management, and sustainable operations</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Sustainability Strategy</h4>
                            <p className="text-muted-foreground text-sm">Developing comprehensive sustainability programs and initiatives</p>
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
                    <CardTitle>Popular Environmental Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to boost your environmental career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {environmentalCertifications.map((cert, index) => (
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

export default EnvironmentalCareerPage;
