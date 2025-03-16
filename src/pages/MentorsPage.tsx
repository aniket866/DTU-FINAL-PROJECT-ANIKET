
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MentorsPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Find a Mentor</h1>
        <p className="text-muted-foreground">Connect with industry professionals who can guide your career journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((mentor) => (
            <Card key={mentor}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={`https://randomuser.me/api/portraits/${mentor % 2 === 0 ? 'women' : 'men'}/${mentor}.jpg`} />
                  <AvatarFallback>MN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Mentor Name</CardTitle>
                  <CardDescription>Software Engineering</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  10+ years of experience in leading tech companies. Specialized in career transitions and interview preparation.
                </p>
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                  Book a Session
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MentorsPage;
