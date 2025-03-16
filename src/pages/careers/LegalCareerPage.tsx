
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, FileText, Gavel, LibraryBig, Building, FileCheck, ArrowRight } from 'lucide-react';

const LegalCareerPage = () => {
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

  const legalRoles = [
    {
      title: "Corporate Law",
      icon: <Building className="h-10 w-10 text-primary" />,
      description: "Advise businesses on legal rights, responsibilities, and obligations",
      skills: ["Contract Drafting", "Corporate Governance", "Regulatory Compliance", "Due Diligence"],
      avgSalary: "$128,000",
      growth: "9%"
    },
    {
      title: "Litigation",
      icon: <Gavel className="h-10 w-10 text-primary" />,
      description: "Represent clients in civil and criminal court proceedings",
      skills: ["Trial Advocacy", "Legal Research", "Case Preparation", "Negotiation"],
      avgSalary: "$122,000",
      growth: "8%"
    },
    {
      title: "Intellectual Property",
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      description: "Protect and enforce rights in creative works, inventions, and brand identities",
      skills: ["Patent Law", "Trademark Law", "Copyright Law", "IP Litigation"],
      avgSalary: "$145,000",
      growth: "14%"
    },
    {
      title: "Legal Research",
      icon: <LibraryBig className="h-10 w-10 text-primary" />,
      description: "Conduct in-depth legal research to support case preparation and legal analysis",
      skills: ["Legal Databases", "Case Analysis", "Legal Writing", "Critical Thinking"],
      avgSalary: "$90,000",
      growth: "10%"
    },
    {
      title: "Environmental Law",
      icon: <Scale className="h-10 w-10 text-primary" />,
      description: "Specialize in regulations related to environmental protection and sustainability",
      skills: ["Regulatory Knowledge", "Compliance", "Policy Analysis", "Litigation"],
      avgSalary: "$115,000",
      growth: "13%"
    },
    {
      title: "Contract Law",
      icon: <FileText className="h-10 w-10 text-primary" />,
      description: "Draft, review, and negotiate contracts to protect client interests",
      skills: ["Contract Drafting", "Negotiation", "Risk Analysis", "Commercial Awareness"],
      avgSalary: "$105,000",
      growth: "7%"
    }
  ];

  const legalCertifications = [
    { name: "Certified E-Discovery Specialist (CEDS)", provider: "ACEDS", level: "Professional" },
    { name: "Certified Information Privacy Professional (CIPP)", provider: "IAPP", level: "Professional" },
    { name: "Certified Compliance & Ethics Professional (CCEP)", provider: "SCCE", level: "Professional" },
    { name: "Legal Lean Sigma Certification", provider: "Legal Lean Sigma Institute", level: "Professional" },
    { name: "Certified Legal Manager (CLM)", provider: "ALA", level: "Management" },
    { name: "Patent Bar Admission", provider: "USPTO", level: "Professional" }
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
              <Scale className="h-10 w-10 text-primary" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary via-primary/80 to-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Legal Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore opportunities in law, compliance, and legal services
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
                {legalRoles.map((role, index) => (
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
                    <CardTitle>Legal Learning Paths</CardTitle>
                    <CardDescription>Educational journeys for legal professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Building className="h-5 w-5 text-primary" /> Corporate Legal Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Legal Foundations</h4>
                            <p className="text-muted-foreground text-sm">Core legal principles and corporate law basics</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Transactional Practice</h4>
                            <p className="text-muted-foreground text-sm">Contract law, mergers and acquisitions, corporate governance</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Regulatory Compliance</h4>
                            <p className="text-muted-foreground text-sm">Industry-specific regulations and compliance frameworks</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Legal Leadership</h4>
                            <p className="text-muted-foreground text-sm">General counsel roles and legal department management</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Gavel className="h-5 w-5 text-primary" /> Litigation Path
                        </h3>
                        <div className="ml-7 space-y-2 border-l-2 border-primary/20 pl-4">
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary"></div>
                            <h4 className="font-medium">Legal Research & Writing</h4>
                            <p className="text-muted-foreground text-sm">Case analysis, legal writing, and research techniques</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/60"></div>
                            <h4 className="font-medium">Civil Procedure</h4>
                            <p className="text-muted-foreground text-sm">Litigation processes, motion practice, and discovery</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/40"></div>
                            <h4 className="font-medium">Trial Advocacy</h4>
                            <p className="text-muted-foreground text-sm">Courtroom skills, evidence presentation, and argumentation</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[1.34rem] top-1 h-3 w-3 rounded-full bg-primary/20"></div>
                            <h4 className="font-medium">Advanced Litigation</h4>
                            <p className="text-muted-foreground text-sm">Complex litigation management and appellate practice</p>
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
                    <CardTitle>Popular Legal Certifications</CardTitle>
                    <CardDescription>Industry-recognized credentials to enhance your legal career</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {legalCertifications.map((cert, index) => (
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

export default LegalCareerPage;
