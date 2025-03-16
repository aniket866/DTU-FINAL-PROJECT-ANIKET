
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, LineChart, PieChart, Briefcase, Award, BookOpen, ArrowRight, BarChart3, Wallet, TrendingUp, BadgeDollarSign, Building, Bank, Receipt, FileSpreadsheet, Banknote } from 'lucide-react';

const FinanceCareerPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        {/* Hero section */}
        <section className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  <span className="text-primary">Finance</span> Career Path
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Launch your finance career with AI-powered guidance, industry insights, and personalized learning paths.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/assessment">Start Skills Assessment</Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link to="/learning">Explore Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-primary/20 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Career Tracks */}
        <section className="py-10 bg-background/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Finance Career Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Wallet className="h-10 w-10 text-primary" />,
                  title: "Financial Analysis",
                  description: "Learn to analyze financial data, create reports, and provide insights for business decisions.",
                  skills: ["Financial Modeling", "Data Analysis", "Excel", "SQL", "Power BI"]
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-primary" />,
                  title: "Investment Banking",
                  description: "Master the skills needed to excel in investment banking, including valuations and M&A.",
                  skills: ["Valuation", "Mergers & Acquisitions", "Financial Modeling", "Pitch Books", "Deal Structuring"]
                },
                {
                  icon: <BadgeDollarSign className="h-10 w-10 text-primary" />,
                  title: "Accounting",
                  description: "Develop expertise in accounting principles, financial reporting, and auditing.",
                  skills: ["Financial Reporting", "Tax Accounting", "Auditing", "Regulatory Compliance", "ERP Systems"]
                },
                {
                  icon: <Building className="h-10 w-10 text-primary" />,
                  title: "Corporate Finance",
                  description: "Learn to manage company finances, capital structure, and investment decisions.",
                  skills: ["Capital Budgeting", "Risk Management", "Treasury", "Financial Planning", "Strategic Planning"]
                },
                {
                  icon: <Bank className="h-10 w-10 text-primary" />,
                  title: "Commercial Banking",
                  description: "Build skills for banking operations, loan analysis, and customer relationship management.",
                  skills: ["Credit Analysis", "Loan Processing", "Risk Assessment", "Relationship Management", "Banking Regulations"]
                },
                {
                  icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
                  title: "FinTech",
                  description: "Combine finance knowledge with technology to innovate in the financial services sector.",
                  skills: ["Financial Software", "Blockchain", "Payment Systems", "API Integration", "Data Science"]
                }
              ].map((track, index) => (
                <Card key={index} className="border border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="mb-4">{track.icon}</div>
                    <CardTitle>{track.title}</CardTitle>
                    <CardDescription>{track.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Assessment */}
        <section className="py-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-card/50 border border-primary/10 rounded-xl p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Assess Your Finance Skills</h2>
                <p className="text-muted-foreground mb-6">
                  Our AI-powered assessment tool evaluates your current finance skills and identifies areas for improvement. Get personalized recommendations for courses and resources.
                </p>
                <Button asChild>
                  <Link to="/assessment" className="flex items-center">
                    Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Banknote className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Financial Literacy</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Market Analysis</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Data Analysis</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Receipt className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Accounting</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Resources */}
        <section className="py-10 bg-background/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Finance Career Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-primary/10">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Learning Paths</CardTitle>
                  <CardDescription>Structured courses to build your finance skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Financial Modeling Essentials
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Investment Analysis Fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Corporate Finance Masterclass
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full mt-4">
                    <Link to="/learning">View All Courses</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-primary/10">
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Interview Prep</CardTitle>
                  <CardDescription>Practice with AI-powered finance interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Investment Banking Interviews
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Financial Analyst Questions
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Case Study Simulations
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full mt-4">
                    <Link to="/interview">Practice Interviews</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-primary/10">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Prepare for finance certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      CFA Exam Preparation
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Financial Risk Manager (FRM)
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Certified Financial Planner (CFP)
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full mt-4">
                    <Link to="/resources">View Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Finance Career Journey Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized guidance, skill assessments, and learning resources to accelerate your finance career growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/assessment">Take Skill Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FinanceCareerPage;
