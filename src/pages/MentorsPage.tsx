
import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar, Code, Database, Briefcase, LineChart, PenTool, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/components/ui/use-toast';

const MentorsPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const { toast } = useToast();
  
  // Define mentor specializations
  const specializations = [
    { id: "software", name: "Software Engineering", icon: <Code size={16} /> },
    { id: "data", name: "Data Science", icon: <Database size={16} /> },
    { id: "product", name: "Product Management", icon: <Briefcase size={16} /> },
    { id: "ux", name: "UX/UI Design", icon: <PenTool size={16} /> },
    { id: "analytics", name: "Analytics", icon: <LineChart size={16} /> },
  ];
  
  // Define mentors data by specialization
  const mentors = {
    "software": [
      {
        id: 1,
        name: "David Kim",
        title: "Senior Software Engineer",
        company: "Microsoft",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4.9,
        reviews: 124,
        specialties: ["React", "Node.js", "System Design"],
        experience: "10+ years",
        price: "$120/hour",
        availability: "Mon, Wed, Fri"
      },
      {
        id: 2,
        name: "Jessica Martinez",
        title: "Lead Frontend Developer",
        company: "Airbnb",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.8,
        reviews: 87,
        specialties: ["JavaScript", "React", "CSS Architecture"],
        experience: "8 years",
        price: "$100/hour",
        availability: "Tues, Thurs, Sat"
      },
      {
        id: 3,
        name: "Michael Chen",
        title: "Backend Engineer",
        company: "Amazon",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 4.7,
        reviews: 56,
        specialties: ["Java", "Spring Boot", "AWS"],
        experience: "6 years",
        price: "$90/hour",
        availability: "Mon, Wed, Sat"
      }
    ],
    "data": [
      {
        id: 4,
        name: "Priya Sharma",
        title: "Senior Data Scientist",
        company: "Netflix",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        rating: 4.9,
        reviews: 93,
        specialties: ["Machine Learning", "Python", "Big Data"],
        experience: "9 years",
        price: "$130/hour",
        availability: "Tues, Thurs, Sun"
      },
      {
        id: 5,
        name: "Robert Johnson",
        title: "AI Research Engineer",
        company: "Google",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5.0,
        reviews: 112,
        specialties: ["Neural Networks", "TensorFlow", "Computer Vision"],
        experience: "12 years",
        price: "$150/hour",
        availability: "Mon, Wed, Fri"
      }
    ],
    "product": [
      {
        id: 6,
        name: "Emily Wong",
        title: "Senior Product Manager",
        company: "Spotify",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 4.8,
        reviews: 76,
        specialties: ["Product Strategy", "User Research", "Agile"],
        experience: "7 years",
        price: "$110/hour",
        availability: "Mon, Thurs, Fri"
      },
      {
        id: 7,
        name: "James Williams",
        title: "Director of Product",
        company: "Slack",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
        rating: 4.9,
        reviews: 104,
        specialties: ["Product Roadmaps", "Growth", "B2B Products"],
        experience: "10 years",
        price: "$140/hour",
        availability: "Tues, Wed, Sat"
      }
    ],
    "ux": [
      {
        id: 8,
        name: "Sophia Garcia",
        title: "Senior UX Designer",
        company: "Adobe",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        rating: 4.8,
        reviews: 89,
        specialties: ["UX Research", "Wireframing", "Design Systems"],
        experience: "8 years",
        price: "$115/hour",
        availability: "Mon, Wed, Fri"
      },
      {
        id: 9,
        name: "Thomas Lee",
        title: "UI/UX Lead",
        company: "Figma",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        rating: 4.7,
        reviews: 65,
        specialties: ["UI Design", "Prototyping", "Design Thinking"],
        experience: "6 years",
        price: "$100/hour",
        availability: "Tues, Thurs, Sat"
      }
    ],
    "analytics": [
      {
        id: 10,
        name: "Olivia Taylor",
        title: "Data Analytics Manager",
        company: "Twitter",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
        rating: 4.6,
        reviews: 54,
        specialties: ["SQL", "Tableau", "Data Visualization"],
        experience: "7 years",
        price: "$95/hour",
        availability: "Mon, Wed, Fri"
      },
      {
        id: 11,
        name: "Daniel Smith",
        title: "Business Intelligence Lead",
        company: "Salesforce",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        rating: 4.8,
        reviews: 71,
        specialties: ["ETL", "PowerBI", "Data Modeling"],
        experience: "9 years",
        price: "$120/hour",
        availability: "Tues, Thurs, Sat"
      }
    ]
  };
  
  const handleBookSession = (mentor) => {
    toast({
      title: "Session Request Sent",
      description: `Your booking request with ${mentor.name} has been sent. We'll notify you when they confirm.`,
      duration: 5000,
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Find Mentors</h1>
          <p className="text-muted-foreground">Connect with industry experts who can guide your career development.</p>
        </div>
        
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="mb-6 w-full sm:w-auto grid grid-cols-2 md:flex md:flex-row gap-1">
            {specializations.map(spec => (
              <TabsTrigger key={spec.id} value={spec.id} className="flex items-center gap-2">
                {spec.icon}
                {spec.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {specializations.map(spec => (
            <TabsContent key={spec.id} value={spec.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors[spec.id].map((mentor) => (
                  <Card key={mentor.id} className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
                    <CardHeader className="p-0">
                      <div className="relative h-48 bg-gradient-to-b from-primary/40 to-accent/40">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <div className="w-24 h-24 rounded-full border-4 border-background overflow-hidden">
                            <img 
                              src={mentor.image} 
                              alt={mentor.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-16 text-center">
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <p className="text-muted-foreground text-sm">{mentor.title} at {mentor.company}</p>
                      <div className="flex items-center justify-center mt-2 mb-4 gap-1">
                        <Star size={16} className="text-primary fill-primary" />
                        <span className="font-semibold">{mentor.rating}</span>
                        <span className="text-muted-foreground text-xs">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {mentor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="bg-primary/10 text-primary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center justify-center gap-1 bg-primary/5 p-2 rounded">
                          <Briefcase size={14} className="text-primary" />
                          <span>{mentor.experience}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 bg-primary/5 p-2 rounded">
                          <Clock size={14} className="text-primary" />
                          <span>{mentor.price}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-1/2">View Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>About {mentor.name}</DialogTitle>
                            <DialogDescription>
                              {mentor.title} at {mentor.company}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-4">
                              <img 
                                src={mentor.image} 
                                alt={mentor.name} 
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-medium">{mentor.name}</div>
                                <div className="text-sm text-muted-foreground">{mentor.company}</div>
                                <div className="flex items-center mt-1">
                                  <Star size={14} className="text-primary fill-primary mr-1" />
                                  <span>{mentor.rating} ({mentor.reviews} reviews)</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Specialties</h4>
                              <div className="flex flex-wrap gap-2">
                                {mentor.specialties.map((specialty, idx) => (
                                  <Badge key={idx} variant="outline" className="bg-primary/10 text-primary">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Availability</h4>
                              <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                <span>{mentor.availability}</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Session Rate</h4>
                              <div className="flex items-center gap-2">
                                <Clock size={16} className="text-primary" />
                                <span>{mentor.price}</span>
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="button" onClick={() => handleBookSession(mentor)}>
                              Book a Session
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Button className="w-1/2" onClick={() => handleBookSession(mentor)}>
                        Book Session
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-primary/5 p-6 rounded-lg mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Are you an industry expert?</h3>
              <p className="text-muted-foreground">Join our mentor network and help shape the future tech workforce.</p>
            </div>
            <Button className="whitespace-nowrap gap-2">
              Become a Mentor <Users size={16} />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MentorsPage;
