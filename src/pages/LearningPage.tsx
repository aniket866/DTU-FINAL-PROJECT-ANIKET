
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LearningPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground">Personalized learning recommendations based on your skills and goals.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
              <CardDescription>
                Courses and resources to improve your technical abilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 bg-secondary rounded-md">Introduction to Python Programming</li>
                <li className="p-2 bg-secondary rounded-md">Web Development Fundamentals</li>
                <li className="p-2 bg-secondary rounded-md">Data Science Essentials</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>
                Resources to enhance your communication and leadership abilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 bg-secondary rounded-md">Effective Communication</li>
                <li className="p-2 bg-secondary rounded-md">Leadership Principles</li>
                <li className="p-2 bg-secondary rounded-md">Problem Solving Techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningPage;
