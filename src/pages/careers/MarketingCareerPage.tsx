
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart, PieChart, Briefcase, Award, BookOpen, ArrowRight, BarChart3, Megaphone, TrendingUp, Lightbulb, Globe, BarChart2, Network, Share2, MessageSquare, Target, LucideImage } from 'lucide-react';

const MarketingCareerPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        {/* Hero section */}
        <section className="py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  <span className="text-primary">Marketing</span> Career Path
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Launch your marketing career with AI-powered guidance, industry insights, and personalized learning paths.
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
                    <Megaphone className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Career Tracks */}
        <section className="py-10 bg-background/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Marketing Career Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  title: "Digital Marketing",
                  description: "Master digital channels including SEO, SEM, email marketing, and content strategy.",
                  skills: ["SEO", "SEM", "Email Marketing", "Content Strategy", "Analytics"]
                },
                {
                  icon: <Share2 className="h-10 w-10 text-primary" />,
                  title: "Social Media Marketing",
                  description: "Learn to build brand presence and drive engagement across social platforms.",
                  skills: ["Social Strategy", "Community Management", "Paid Social", "Content Creation", "Social Analytics"]
                },
                {
                  icon: <BarChart2 className="h-10 w-10 text-primary" />,
                  title: "Marketing Analytics",
                  description: "Develop skills to analyze marketing data and derive actionable insights.",
                  skills: ["Data Analysis", "Attribution Modeling", "A/B Testing", "Reporting", "Marketing ROI"]
                },
                {
                  icon: <LucideImage className="h-10 w-10 text-primary" />,
                  title: "Brand Management",
                  description: "Learn to develop and maintain brand identity, positioning, and strategy.",
                  skills: ["Brand Strategy", "Identity Design", "Voice & Tone", "Brand Guidelines", "Market Research"]
                },
                {
                  icon: <Target className="h-10 w-10 text-primary" />,
                  title: "Product Marketing",
                  description: "Master the skills to position products, develop go-to-market strategies, and drive adoption.",
                  skills: ["Market Analysis", "Positioning", "Launch Planning", "Buyer Personas", "Sales Enablement"]
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                  title: "Content Marketing",
                  description: "Develop expertise in creating engaging content across multiple channels.",
                  skills: ["Content Strategy", "Storytelling", "SEO Writing", "Content Calendar", "Content Distribution"]
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
                <h2 className="text-3xl font-bold mb-4">Assess Your Marketing Skills</h2>
                <p className="text-muted-foreground mb-6">
                  Our AI-powered assessment tool evaluates your current marketing skills and identifies areas for improvement. Get personalized recommendations for courses and resources.
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
                    <Globe className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Digital Strategy</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Growth Marketing</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <BarChart3 className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Analytics</h3>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <MessageSquare className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Content Creation</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Resources */}
        <section className="py-10 bg-background/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Marketing Career Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-primary/10">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Learning Paths</CardTitle>
                  <CardDescription>Structured courses to build your marketing skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Digital Marketing Fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Content Marketing Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Social Media Mastery
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
                  <CardDescription>Practice with AI-powered marketing interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Marketing Manager Questions
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Growth Marketer Interviews
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
                  <CardDescription>Prepare for marketing certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Google Analytics Certification
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      HubSpot Inbound Marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Facebook Blueprint Certification
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
            <h2 className="text-3xl font-bold mb-4">Start Your Marketing Career Journey Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized guidance, skill assessments, and learning resources to accelerate your marketing career growth.
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

export default MarketingCareerPage;
