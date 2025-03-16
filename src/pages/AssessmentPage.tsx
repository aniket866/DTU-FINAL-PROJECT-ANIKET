
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AssessmentPage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Skills Assessment</h1>
        <p className="text-muted-foreground">Analyze your skills and get personalized recommendations.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Start Assessment</CardTitle>
            <CardDescription>
              Complete a comprehensive assessment to identify your strengths and areas for improvement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 text-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
                Begin Assessment
              </button>
              <p className="mt-4 text-sm text-muted-foreground">
                Takes approximately 15-20 minutes to complete.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AssessmentPage;
