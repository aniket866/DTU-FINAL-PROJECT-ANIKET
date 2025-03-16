
import axios from 'axios';
import { toast } from 'sonner';

const API_URL = 'http://localhost:3000'; // Replace with your actual API URL when deploying

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    
    // Handle authentication errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data: any) => api.put('/auth/update-profile', data),
  deleteAccount: () => api.delete('/auth/delete-account'),
};

// Assessment services
export const assessmentService = {
  submitAssessment: (answers: any) => api.post('/assessment/submit', { answers }),
  getResults: () => api.get('/assessment/results'),
  getCareerOptions: () => api.get('/career/options'),
  getCareerDetails: (careerId: string) => api.get(`/career/details/${careerId}`),
};

// Mentor services
export const mentorService = {
  getMentors: () => api.get('/mentors'),
  getMentorDetails: (mentorId: string) => api.get(`/mentors/${mentorId}`),
  bookSession: (mentorId: string, sessionTime: string) => 
    api.post('/mentors/book', { mentorId, sessionTime }),
  cancelBooking: (bookingId: string) => api.put(`/mentors/cancel-booking/${bookingId}`),
  submitReview: (mentorId: string, rating: number, comment: string) => 
    api.post(`/mentors/review/${mentorId}`, { rating, comment }),
  getMentorFeedback: (mentorId: string) => api.get(`/mentors/feedback/${mentorId}`),
};

// Resources services
export const resourceService = {
  getArticles: () => api.get('/resources/articles'),
  getWebinars: () => api.get('/resources/webinars'),
  getMarketTrends: () => api.get('/market-trends'),
  likeResource: (resourceId: string) => api.post(`/resources/like/${resourceId}`),
};

// Notification services
export const notificationService = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (notificationId: string) => api.post(`/notifications/mark-read/${notificationId}`),
  clearNotifications: () => api.delete('/notifications/clear'),
};

// Mock AI interview service
export const aiService = {
  // These endpoints would connect to your AI services
  startInterview: (jobTitle: string) => 
    Promise.resolve({ interviewId: 'mock-id', questions: getMockInterviewQuestions(jobTitle) }),
  
  submitAnswer: (interviewId: string, questionId: string, answer: string) => 
    Promise.resolve({ 
      feedback: {
        content: 'Your answer demonstrated good communication skills, but could use more specific examples.',
        confidence: 0.85,
        delivery: 0.78,
        relevance: 0.92,
        improvements: [
          'Include more specific examples from your experience',
          'Structure your answer with a clear beginning, middle, and end',
          'Quantify your achievements when possible'
        ]
      }
    }),
  
  getPersonalizedFeedback: (interviewId: string) =>
    Promise.resolve({
      overallScore: 87,
      strengths: [
        'Clear communication',
        'Professional demeanor',
        'Good problem-solving approach'
      ],
      weaknesses: [
        'Could provide more detailed examples',
        'Sometimes uses filler words',
        'Could improve eye contact'
      ],
      recommendedCourses: [
        {
          id: '1',
          title: 'Advanced Interview Techniques',
          provider: 'Coursera',
          url: 'https://www.coursera.org',
          description: 'Learn how to excel in technical and behavioral interviews'
        },
        {
          id: '2',
          title: 'Public Speaking Mastery',
          provider: 'Udemy',
          url: 'https://www.udemy.com',
          description: 'Improve your verbal communication and presentation skills'
        }
      ]
    })
};

// Mock function to simulate interview questions based on job title
function getMockInterviewQuestions(jobTitle: string) {
  const commonQuestions = [
    { id: '1', question: 'Tell me about yourself and your experience.' },
    { id: '2', question: 'What are your greatest strengths and weaknesses?' },
    { id: '3', question: 'Why are you interested in this position?' },
    { id: '4', question: 'Where do you see yourself in 5 years?' },
    { id: '5', question: 'Describe a challenge you faced and how you overcame it.' }
  ];
  
  const techQuestions = [
    { id: '6', question: 'Explain your experience with agile development methodologies.' },
    { id: '7', question: 'Describe a complex technical problem you solved recently.' },
    { id: '8', question: 'How do you stay updated with the latest technologies?' }
  ];
  
  const managerialQuestions = [
    { id: '6', question: 'How do you handle conflict within your team?' },
    { id: '7', question: 'Describe your management style.' },
    { id: '8', question: 'How do you prioritize and delegate tasks?' }
  ];
  
  if (jobTitle.toLowerCase().includes('developer') || 
      jobTitle.toLowerCase().includes('engineer') || 
      jobTitle.toLowerCase().includes('tech')) {
    return [...commonQuestions, ...techQuestions];
  } else if (jobTitle.toLowerCase().includes('manager') || 
             jobTitle.toLowerCase().includes('director') || 
             jobTitle.toLowerCase().includes('lead')) {
    return [...commonQuestions, ...managerialQuestions];
  }
  
  return commonQuestions;
}

export default api;
