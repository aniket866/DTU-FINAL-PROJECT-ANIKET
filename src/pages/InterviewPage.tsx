
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InterviewPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Interview Simulator</h1>
        <p className="text-muted-foreground">Practice interviews with real-time feedback on your responses.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Start a Mock Interview</CardTitle>
            <CardDescription>
              Our AI interviewer will ask you questions and provide real-time feedback.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 text-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
                Start Interview Session
              </button>
              <p className="mt-4 text-sm text-muted-foreground">
                Get feedback on your speech, tone, and expressions during the interview.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default InterviewPage;
