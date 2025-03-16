
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

// Career field services
export const careerService = {
  // General career services
  getAllCareerFields: () => api.get('/careers/fields'),
  getCareerDetails: (fieldId: string) => api.get(`/careers/fields/${fieldId}`),
  getCareerRoles: (fieldId: string) => api.get(`/careers/fields/${fieldId}/roles`),
  getCareerPath: (roleId: string) => api.get(`/careers/roles/${roleId}/path`),
  
  // Technology career services
  getTechRoles: () => api.get('/careers/tech/roles'),
  getTechCertifications: () => api.get('/careers/tech/certifications'),
  getTechSkills: () => api.get('/careers/tech/skills'),
  
  // Healthcare career services
  getHealthcareRoles: () => api.get('/careers/healthcare/roles'),
  getHealthcareCertifications: () => api.get('/careers/healthcare/certifications'),
  getHealthcareEducation: () => api.get('/careers/healthcare/education'),
  
  // Business career services
  getBusinessRoles: () => api.get('/careers/business/roles'),
  getBusinessCertifications: () => api.get('/careers/business/certifications'),
  getBusinessSkills: () => api.get('/careers/business/skills'),
  
  // Education career services
  getEducationRoles: () => api.get('/careers/education/roles'),
  getEducationCertifications: () => api.get('/careers/education/certifications'),
  getEducationRequirements: () => api.get('/careers/education/requirements'),
  
  // Legal career services
  getLegalRoles: () => api.get('/careers/legal/roles'),
  getLegalCertifications: () => api.get('/careers/legal/certifications'),
  getLegalEducation: () => api.get('/careers/legal/education'),
  
  // Engineering career services
  getEngineeringRoles: () => api.get('/careers/engineering/roles'),
  getEngineeringCertifications: () => api.get('/careers/engineering/certifications'),
  getEngineeringSkills: () => api.get('/careers/engineering/skills'),
};

// Assessment services
export const assessmentService = {
  submitAssessment: (answers: any) => api.post('/assessment/submit', { answers }),
  getResults: () => api.get('/assessment/results'),
  getCareerOptions: () => api.get('/assessment/career-options'),
  getCareerDetails: (careerId: string) => api.get(`/assessment/career-details/${careerId}`),
  getPersonalizedPath: (userId: string, fieldId: string) => 
    api.get(`/assessment/personalized-path/${userId}/${fieldId}`),
};

// Mentor services
export const mentorService = {
  getMentors: (field?: string) => api.get('/mentors', { params: { field } }),
  getMentorDetails: (mentorId: string) => api.get(`/mentors/${mentorId}`),
  bookSession: (mentorId: string, sessionTime: string) => 
    api.post('/mentors/book', { mentorId, sessionTime }),
  cancelBooking: (bookingId: string) => api.put(`/mentors/cancel-booking/${bookingId}`),
  submitReview: (mentorId: string, rating: number, comment: string) => 
    api.post(`/mentors/review/${mentorId}`, { rating, comment }),
  getMentorFeedback: (mentorId: string) => api.get(`/mentors/feedback/${mentorId}`),
  searchMentorsByField: (field: string) => api.get(`/mentors/search?field=${field}`),
};

// Resources services
export const resourceService = {
  getResources: (field?: string) => api.get('/resources', { params: { field } }),
  getArticles: (field?: string) => api.get('/resources/articles', { params: { field } }),
  getWebinars: (field?: string) => api.get('/resources/webinars', { params: { field } }),
  getMarketTrends: (field?: string) => api.get('/market-trends', { params: { field } }),
  likeResource: (resourceId: string) => api.post(`/resources/like/${resourceId}`),
  getCourses: (field?: string) => api.get('/resources/courses', { params: { field } }),
  getBooks: (field?: string) => api.get('/resources/books', { params: { field } }),
};

// Notification services
export const notificationService = {
  getNotifications: () => api.get('/notifications'),
  markAsRead: (notificationId: string) => api.post(`/notifications/mark-read/${notificationId}`),
  clearNotifications: () => api.delete('/notifications/clear'),
};

// AI interview service - updated for multiple career fields
export const aiService = {
  // These endpoints would connect to your AI services
  startInterview: (jobTitle: string, field: string) => 
    Promise.resolve({ interviewId: 'mock-id', questions: getMockInterviewQuestions(jobTitle, field) }),
  
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
  
  getPersonalizedFeedback: (interviewId: string, field: string) =>
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
      recommendedCourses: getRecommendedCourses(field)
    })
};

// Mock function to simulate interview questions based on job title and field
function getMockInterviewQuestions(jobTitle: string, field: string = 'technology') {
  const commonQuestions = [
    { id: '1', question: 'Tell me about yourself and your experience.' },
    { id: '2', question: 'What are your greatest strengths and weaknesses?' },
    { id: '3', question: 'Why are you interested in this position?' },
    { id: '4', question: 'Where do you see yourself in 5 years?' },
    { id: '5', question: 'Describe a challenge you faced and how you overcame it.' }
  ];
  
  const fieldSpecificQuestions: Record<string, any[]> = {
    technology: [
      { id: '6', question: 'Explain your experience with agile development methodologies.' },
      { id: '7', question: 'Describe a complex technical problem you solved recently.' },
      { id: '8', question: 'How do you stay updated with the latest technologies?' }
    ],
    healthcare: [
      { id: '6', question: 'How do you ensure patient confidentiality?' },
      { id: '7', question: 'Describe a situation where you had to deal with a difficult patient.' },
      { id: '8', question: 'How do you stay current with medical advances in your field?' }
    ],
    business: [
      { id: '6', question: 'Describe a successful project you led and its impact.' },
      { id: '7', question: 'How do you approach financial decision-making?' },
      { id: '8', question: 'What strategies do you use for client retention?' }
    ],
    education: [
      { id: '6', question: 'How do you adapt your teaching to different learning styles?' },
      { id: '7', question: 'Describe how you evaluate student progress.' },
      { id: '8', question: 'How do you incorporate technology in your teaching?' }
    ],
    legal: [
      { id: '6', question: 'How do you handle ethically challenging situations?' },
      { id: '7', question: 'Describe your research methodology for case preparation.' },
      { id: '8', question: 'How do you stay current with changing laws and regulations?' }
    ],
    engineering: [
      { id: '6', question: 'Describe a complex engineering problem you solved.' },
      { id: '7', question: 'How do you ensure safety standards are met in your designs?' },
      { id: '8', question: 'How do you approach collaboration with cross-functional teams?' }
    ],
    environmental: [
      { id: '6', question: 'How do you balance environmental concerns with practical constraints?' },
      { id: '7', question: 'Describe a successful sustainability initiative you implemented.' },
      { id: '8', question: 'How do you stay updated with environmental regulations?' }
    ]
  };
  
  // Default to technology if the field isn't found
  const fieldQuestions = fieldSpecificQuestions[field.toLowerCase()] || fieldSpecificQuestions.technology;
  
  return [...commonQuestions, ...fieldQuestions];
}

// Mock function to get recommended courses based on career field
function getRecommendedCourses(field: string = 'technology') {
  const coursesByField: Record<string, any[]> = {
    technology: [
      {
        id: '1',
        title: 'Advanced Software Development',
        provider: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Master advanced programming concepts and design patterns'
      },
      {
        id: '2',
        title: 'Cloud Architecture Masterclass',
        provider: 'Udemy',
        url: 'https://www.udemy.com',
        description: 'Design scalable and resilient cloud solutions'
      }
    ],
    healthcare: [
      {
        id: '1',
        title: 'Advanced Patient Care',
        provider: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Enhance your skills in providing comprehensive patient care'
      },
      {
        id: '2',
        title: 'Healthcare Administration Essentials',
        provider: 'Udemy',
        url: 'https://www.udemy.com',
        description: 'Learn key principles of managing healthcare facilities'
      }
    ],
    business: [
      {
        id: '1',
        title: 'Strategic Business Management',
        provider: 'Harvard Business School Online',
        url: 'https://online.hbs.edu',
        description: 'Develop strategies for business growth and optimization'
      },
      {
        id: '2',
        title: 'Financial Analysis for Decision Making',
        provider: 'Udemy',
        url: 'https://www.udemy.com',
        description: 'Use financial data to drive business decisions'
      }
    ],
    education: [
      {
        id: '1',
        title: 'Modern Teaching Methodologies',
        provider: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Innovative approaches to effective teaching'
      },
      {
        id: '2',
        title: 'Educational Technology Integration',
        provider: 'edX',
        url: 'https://www.edx.org',
        description: 'Incorporate digital tools into your teaching practice'
      }
    ]
  };
  
  // Default to technology if the field isn't found
  return coursesByField[field.toLowerCase()] || coursesByField.technology;
}

export default api;
