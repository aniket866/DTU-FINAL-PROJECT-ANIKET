
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">John Doe</h1>
            <p className="text-muted-foreground">Software Engineer | React Developer</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm">Edit Profile</Button>
              <Button size="sm" variant="outline">Share Profile</Button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Passionate software engineer with 5+ years of experience in web development. 
                    Specializing in React, TypeScript, and Node.js. Looking for opportunities to 
                    grow as a technical lead in a collaborative environment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <span className="font-medium">Email:</span> john.doe@example.com
                  </div>
                  <div>
                    <span className="font-medium">LinkedIn:</span> /in/johndoe
                  </div>
                  <div>
                    <span className="font-medium">GitHub:</span> @johndoe
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Career Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h3 className="font-medium">Senior React Developer</h3>
                      <p className="text-sm text-muted-foreground">TechCorp • 2020 - Present</p>
                      <p className="text-sm mt-2">
                        Led a team of 5 developers in building enterprise applications. Implemented 
                        CI/CD pipelines and reduced build times by 40%.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-muted-foreground pl-4 space-y-1">
                      <h3 className="font-medium">Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">WebSolutions • 2018 - 2020</p>
                      <p className="text-sm mt-2">
                        Developed responsive web applications using React and Redux. Collaborated 
                        with designers to implement UI/UX improvements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills Assessment</CardTitle>
                <CardDescription>Based on your assessments and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React</span>
                      <span className="text-muted-foreground">Expert (90%)</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">TypeScript</span>
                      <span className="text-muted-foreground">Advanced (80%)</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Node.js</span>
                      <span className="text-muted-foreground">Intermediate (60%)</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Take New Assessment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="learning">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your courses and learning paths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Advanced React Patterns</h3>
                      <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Coursera • 8/12 modules completed</div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '66%' }}></div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">Continue Learning</Button>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">System Design for Frontend Developers</h3>
                      <span className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded-full">Completed</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Udemy • 10/10 modules completed</div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">View Certificate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Mentoring Sessions</CardTitle>
                <CardDescription>Your upcoming and past mentoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="font-medium">Upcoming Sessions</h3>
                  
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Career Path Planning</h4>
                        <p className="text-sm text-muted-foreground">With Sarah Johnson • Technical Lead</p>
                        <p className="text-sm mt-1">June 15, 2023 • 3:00 PM - 4:00 PM EST</p>
                      </div>
                      <Button variant="outline" size="sm">Reschedule</Button>
                    </div>
                  </div>
                  
                  <h3 className="font-medium mt-6">Past Sessions</h3>
                  
                  <div className="p-4 border rounded-md opacity-80">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Resume Review</h4>
                        <p className="text-sm text-muted-foreground">With Michael Chen • Hiring Manager</p>
                        <p className="text-sm mt-1">May 22, 2023 • 2:00 PM - 3:00 PM EST</p>
                      </div>
                      <Button variant="outline" size="sm">View Notes</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
