
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Layers className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">CareerCoach<span className="text-primary">AI</span></span>
            </Link>
            <p className="text-muted-foreground">
              Advanced AI-powered career coaching and interview preparation platform to help you land your dream job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/interview" className="text-muted-foreground hover:text-primary transition-colors">AI Interview Simulator</Link>
              </li>
              <li>
                <Link to="/assessment" className="text-muted-foreground hover:text-primary transition-colors">Career Assessment</Link>
              </li>
              <li>
                <Link to="/learning" className="text-muted-foreground hover:text-primary transition-colors">Personalized Learning</Link>
              </li>
              <li>
                <Link to="/mentors" className="text-muted-foreground hover:text-primary transition-colors">Expert Mentorship</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Career Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Webinars</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Career Guides</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Industry Reports</Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} CareerCoachAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
