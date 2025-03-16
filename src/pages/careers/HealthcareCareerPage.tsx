
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, Stethoscope, Brain, Activity, Microscope, Pill, Clipboard, ArrowRight } from 'lucide-react';

const HealthcareCareerPage = () => {
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

  const healthcareRoles = [
    {
      title: "Nursing",
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      description: "Provide and coordinate patient care, educate patients about health conditions",
      skills: ["Patient Care", "Clinical Assessment", "Medical Knowledge", "Communication"],
      avgSalary: "$75,000",
      growth: "12%"
    },
    {
      title: "Physician",
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      description: "Diagnose and treat illnesses, prescribe medication, and counsel patients",
      skills: ["Diagnosis", "Patient Assessment", "Medical Expertise", "Decision Making"],
      avgSalary: "$208,000",
      growth: "7%"
    },
    {
      title: "Mental Health Professional",
      icon: <Brain className="h-10 w-10 text-primary" />,
      description: "Assess, diagnose and treat psychological and emotional disorders",
      skills: ["Counseling", "Psychological Assessment", "Therapy Techniques", "Empathy"],
      avgSalary: "$85,000",
      growth: "22%"
    },
    {
      title: "Medical Technologist",
      icon: <Microscope className="h-10 w-10 text-primary" />,
      description: "Analyze body fluids, tissues and cells to aid in disease diagnosis",
      skills: ["Lab Techniques", "Sample Analysis", "Quality Control", "Technical Precision"],
      avgSalary: "$55,000",
      growth: "11%"
    },
    {
      title: "Pharmacist",
      icon: <Pill className="h-10 w-10 text-primary" />,
      description: "Dispense medications and advise on proper use of prescriptions",
      skills: ["Pharmacology", "Medication Management", "Patient Education", "Attention to Detail"],
      avgSalary: "$125,000",
      growth: "4%"
    },
    {
      title: "Healthcare Administrator",
      icon: <Clipboard className="h-10 w-10 text-primary" />,
      description: "Plan, direct, and coordinate medical and health services",
      skills: ["Healthcare Regulations", "Leadership", "Budgeting", "Operations Management"],
      avgSalary: "$100,000",
      growth: "32%"
    }
  ];

  const healthcareCertifications = [
    { name: "Registered Nurse (RN)", provider: "NCSBN", level: "Professional" },
    { name: "Certified Medical Assistant (CMA)", provider: "AAMA", level: "Entry-level" },
    { name: "Certified Nursing Assistant (CNA)", provider: "State Boards", level: "Entry-level" },
    { name: "Licensed Practical Nurse (LPN)", provider: "NCSBN", level: "Intermediate" },
    { name: "Pharmacy Technician Certification", provider: "PTCB", level: "Entry-level" },
    { name: "Medical Coding Certification", provider: "AAPC", level: "Specialized" }
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
              <HeartPulse className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Healthcare Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore rewarding roles, educational paths, and resources in the healthcare sector
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
                {healthcareRoles.map((role, index) => (
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
                    <CardTitle>Healthcare Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for healthcare professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <HeartPulse className="h-5 w-5 text-primary" /> Nursing Career Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Certified Nursing Assistant (CNA)</h4>
                            <p className="text-muted-foreground text-sm">Basic patient care and support</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Licensed Practical Nurse (LPN)</h4>
                            <p className="text-muted-foreground text-sm">Basic nursing care under RN supervision</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Registered Nurse (RN)</h4>
                            <p className="text-muted-foreground text-sm">Comprehensive patient care and management</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Advanced Practice Nurse</h4>
                            <p className="text-muted-foreground text-sm">Specialized nursing roles with advanced responsibilities</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Activity className="h-5 w-5 text-primary" /> Allied Health Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Medical Assistant</h4>
                            <p className="text-muted-foreground text-sm">Administrative and clinical support</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Radiologic Technologist</h4>
                            <p className="text-muted-foreground text-sm">Medical imaging and diagnostics</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Physical Therapy Assistant</h4>
                            <p className="text-muted-foreground text-sm">Supporting rehabilitation services</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Specialized Technologist</h4>
                            <p className="text-muted-foreground text-sm">Advanced technical healthcare services</p>
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
                    <CardTitle>Popular Healthcare Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to advance your healthcare career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {healthcareCertifications.map((cert, index) => (
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

export default HealthcareCareerPage;
