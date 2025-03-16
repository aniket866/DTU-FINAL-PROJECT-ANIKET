
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Star, Clock, ChevronRight, CalendarDays, Calendar as CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

// Fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Stagger children animation variant
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  skills: string[];
  experience: string;
  rate: string;
  rating: number;
  reviewCount: number;
  bio: string;
  availability: {
    date: string;
    slots: string[];
  }[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Alex Rodriguez",
    title: "Senior Software Engineer",
    company: "Google",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["React", "Node.js", "System Design", "Frontend Architecture"],
    experience: "12+ years",
    rate: "$120/hour",
    rating: 4.9,
    reviewCount: 124,
    bio: "I've been leading frontend teams at Google for the past 5 years. Specialized in React performance optimization and building scalable frontend architectures. I've helped over 50 engineers successfully interview at top tech companies.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["10:00 AM", "1:00 PM", "3:30 PM"]
      },
      {
        date: "In 2 days",
        slots: ["9:00 AM", "11:30 AM", "4:00 PM"]
      }
    ]
  },
  {
    id: 2,
    name: "Sophia Chen",
    title: "Engineering Manager",
    company: "Microsoft",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Leadership", "System Design", "Career Growth", "Technical Interviews"],
    experience: "15+ years",
    rate: "$150/hour",
    rating: 4.8,
    reviewCount: 87,
    bio: "Engineering Manager at Microsoft with experience leading distributed teams across cloud infrastructure projects. I specialize in helping mid-level engineers advance to senior and leadership roles through structured mentorship.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["11:00 AM", "2:00 PM"]
      },
      {
        date: "In 2 days",
        slots: ["10:30 AM", "3:00 PM", "5:30 PM"]
      }
    ]
  },
  {
    id: 3,
    name: "David Kim",
    title: "Product Manager",
    company: "Amazon",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: ["Product Strategy", "User Research", "Roadmapping", "PM Interviews"],
    experience: "8+ years",
    rate: "$135/hour",
    rating: 4.7,
    reviewCount: 56,
    bio: "Senior PM at Amazon who has launched products used by millions. I specialize in helping engineers transition to product management roles and preparing candidates for PM interviews at FAANG companies.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["9:30 AM", "12:00 PM", "4:30 PM"]
      },
      {
        date: "In 2 days",
        slots: ["10:00 AM", "1:30 PM"]
      }
    ]
  },
  {
    id: 4,
    name: "Maya Patel",
    title: "Data Science Lead",
    company: "Netflix",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    skills: ["Machine Learning", "Python", "Data Visualization", "A/B Testing"],
    experience: "10+ years",
    rate: "$140/hour",
    rating: 4.9,
    reviewCount: 72,
    bio: "Leading data science initiatives at Netflix focused on recommendation algorithms. I help data scientists and ML engineers prepare for technical interviews and advance their careers in top tech companies.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["11:30 AM", "2:30 PM"]
      },
      {
        date: "In 2 days",
        slots: ["9:00 AM", "1:00 PM", "3:00 PM"]
      }
    ]
  },
  {
    id: 5,
    name: "James Wilson",
    title: "CTO",
    company: "Tech Startup",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    skills: ["Tech Leadership", "Entrepreneurship", "System Architecture", "Career Advice"],
    experience: "20+ years",
    rate: "$200/hour",
    rating: 4.8,
    reviewCount: 43,
    bio: "Serial entrepreneur and CTO with 4 successful exits. I mentor tech leaders and architects on career growth, technical decision making, and navigating organizational challenges in both startups and enterprises.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["10:00 AM", "3:00 PM"]
      },
      {
        date: "In 2 days",
        slots: ["11:00 AM", "4:00 PM"]
      }
    ]
  },
  {
    id: 6,
    name: "Emily Johnson",
    title: "UX Research Director",
    company: "Apple",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    skills: ["User Experience", "UI Design", "Product Research", "Design Systems"],
    experience: "14+ years",
    rate: "$160/hour",
    rating: 4.9,
    reviewCount: 91,
    bio: "Director of UX Research at Apple with expertise in building intuitive user experiences. I specialize in mentoring designers and researchers, and helping them prepare for design interviews at top tech companies.",
    availability: [
      {
        date: "Tomorrow",
        slots: ["9:00 AM", "12:30 PM", "4:00 PM"]
      },
      {
        date: "In 2 days",
        slots: ["10:30 AM", "2:00 PM"]
      }
    ]
  }
];

const MentorsPage = () => {
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleBookSession = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setSelectedDate(mentor.availability[0].date);
    setSelectedTime("");
    setIsModalOpen(true);
  };

  const confirmBooking = () => {
    if (!selectedTime) {
      toast({
        title: "Please select a time slot",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Session Booked!",
      description: `Your session with ${selectedMentor?.name} is confirmed for ${selectedDate} at ${selectedTime}.`,
      variant: "default"
    });
    
    setIsModalOpen(false);
    setSelectedMentor(null);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary-foreground border border-primary/20">
            <Users size={16} className="mr-2" />
            <span className="text-sm font-medium">Expert Guidance</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Connect with Industry Mentors</h1>
          <p className="text-xl text-muted-foreground">Get personalized career advice from tech professionals who have worked at top companies.</p>
        </div>
        
        {/* Filter options */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            All Mentors
          </Badge>
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            Software Engineering
          </Badge>
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            Product Management
          </Badge>
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            Data Science
          </Badge>
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            UX/UI Design
          </Badge>
          <Badge variant="outline" className="py-2 px-4 cursor-pointer hover:bg-primary/10 transition-colors">
            Leadership
          </Badge>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col hover:-translate-y-1 transition-all duration-300 overflow-hidden border-border/50 hover:shadow-md">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{mentor.name}</CardTitle>
                    <CardDescription className="text-base">{mentor.title}</CardDescription>
                    <CardDescription className="text-sm font-medium text-primary">
                      {mentor.company}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.skills.slice(0, 3).map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary-foreground border-none">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.skills.length > 3 && (
                      <Badge variant="outline">+{mentor.skills.length - 3}</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-muted-foreground">({mentor.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{mentor.experience}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {mentor.bio}
                  </p>
                  <div className="text-sm font-semibold">
                    {mentor.rate}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/50 pt-4">
                  <Button 
                    className="w-full"
                    onClick={() => handleBookSession(mentor)}
                  >
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Session</DialogTitle>
            <DialogDescription>
              Schedule a mentoring session with {selectedMentor?.name}.
            </DialogDescription>
          </DialogHeader>
          
          {selectedMentor && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={selectedMentor.avatar} />
                  <AvatarFallback>{selectedMentor.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{selectedMentor.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedMentor.title} at {selectedMentor.company}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> Select Date
                  </h4>
                  <RadioGroup 
                    value={selectedDate} 
                    onValueChange={setSelectedDate}
                    className="flex gap-4"
                  >
                    {selectedMentor.availability.map((avail) => (
                      <div key={avail.date} className="flex items-center space-x-2">
                        <RadioGroupItem value={avail.date} id={avail.date} />
                        <Label htmlFor={avail.date} className="cursor-pointer">{avail.date}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Select Time
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedMentor.availability.find(a => a.date === selectedDate)?.slots.map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? "default" : "outline"}
                        className={cn(
                          "text-sm py-1",
                          selectedTime === slot && "bg-primary text-primary-foreground"
                        )}
                        onClick={() => setSelectedTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Session Rate</span>
                    <span className="font-medium">{selectedMentor.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">60 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={confirmBooking}>
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default MentorsPage;
