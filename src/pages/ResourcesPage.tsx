
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResourcesPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Career Resources</h1>
        <p className="text-muted-foreground">Access our collection of articles, guides, and tools to help advance your career.</p>
        
        <Tabs defaultValue="articles">
          <TabsList className="mb-6">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-4">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>How to Ace Your Technical Interview</CardTitle>
                  <CardDescription>Published: June {item}, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn the most effective strategies for preparing and performing well in technical interviews. 
                    This guide covers common questions, problem-solving approaches, and tips for effective communication.
                  </p>
                  <button className="mt-4 text-primary hover:underline">Read More →</button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="webinars" className="space-y-4">
            {[1, 2].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Upcoming: Navigating Career Transitions</CardTitle>
                  <CardDescription>June {item + 15}, 2023 - 2:00 PM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Join industry experts as they discuss strategies for successfully transitioning between different roles 
                    or industries. Learn how to leverage your existing skills and identify learning opportunities.
                  </p>
                  <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                    Register Now
                  </button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resume Builder</CardTitle>
                <CardDescription>Create an ATS-friendly resume</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Use our AI-powered resume builder to create a professional, ATS-friendly resume that highlights your 
                  skills and experiences effectively.
                </p>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                  Launch Tool
                </button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Salary Calculator</CardTitle>
                <CardDescription>Compare industry compensation packages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Get accurate salary estimates based on your role, experience, location, and industry. Compare 
                  compensation packages and negotiate better offers.
                </p>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                  Calculate Salary
                </button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
