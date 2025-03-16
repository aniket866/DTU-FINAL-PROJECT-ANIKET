
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

// Pages
import HomePage from "./pages/HomePage";
import InterviewPage from "./pages/InterviewPage";
import AssessmentPage from "./pages/AssessmentPage";
import LearningPage from "./pages/LearningPage";
import MentorsPage from "./pages/MentorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import MotivationPage from "./pages/MotivationPage"; 
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

// Career Field specific pages
import TechnologyCareerPage from "./pages/careers/TechnologyCareerPage";
import HealthcareCareerPage from "./pages/careers/HealthcareCareerPage";
import BusinessCareerPage from "./pages/careers/BusinessCareerPage";
import EducationCareerPage from "./pages/careers/EducationCareerPage";
import LegalCareerPage from "./pages/careers/LegalCareerPage";
import EngineeringCareerPage from "./pages/careers/EngineeringCareerPage";
import EnvironmentalCareerPage from "./pages/careers/EnvironmentalCareerPage";
import FinanceCareerPage from "./pages/careers/FinanceCareerPage";
import MarketingCareerPage from "./pages/careers/MarketingCareerPage";

// Protected route component
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/mentors" element={<MentorsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/motivation" element={<MotivationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Career Field Routes */}
              <Route path="/careers/technology" element={<TechnologyCareerPage />} />
              <Route path="/careers/healthcare" element={<HealthcareCareerPage />} />
              <Route path="/careers/business" element={<BusinessCareerPage />} />
              <Route path="/careers/education" element={<EducationCareerPage />} />
              <Route path="/careers/legal" element={<LegalCareerPage />} />
              <Route path="/careers/engineering" element={<EngineeringCareerPage />} />
              <Route path="/careers/environmental" element={<EnvironmentalCareerPage />} />
              <Route path="/careers/finance" element={<FinanceCareerPage />} />
              <Route path="/careers/marketing" element={<MarketingCareerPage />} />
              
              {/* Protected Routes */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
