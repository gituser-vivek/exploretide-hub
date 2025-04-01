
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const teamMembers = [
  {
    name: 'Jane Cooper',
    role: 'Project Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John Smith',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Michael Johnson',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sarah Wilson',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-findit-purple/10 text-findit-purple flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-lg mb-1">Email</h3>
                <p className="text-muted-foreground mb-3">Our friendly team is here to help.</p>
                <a href="mailto:contact@findit.com" className="text-findit-purple font-medium">
                  contact@findit.com
                </a>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-findit-blue/10 text-findit-blue flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-lg mb-1">Office</h3>
                <p className="text-muted-foreground mb-3">Come visit our campus.</p>
                <address className="not-italic text-findit-blue font-medium">
                  123 University Ave, Tech Hub
                </address>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-findit-teal/10 text-findit-teal flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground mb-3">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+11234567890" className="text-findit-teal font-medium">
                  +1 (123) 456-7890
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us what you're thinking about..." 
                    className="min-h-32"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Meet the team</h2>
              <p className="text-muted-foreground mb-8">
                Our talented team of developers, designers, and event curators working to make FindIt better every day.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="p-4 flex items-center space-x-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-16 w-16 rounded-full object-cover" 
                    />
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="flex space-x-2 mt-2">
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Github className="h-4 w-4" />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Visit us</h2>
            <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component */}
              <div className="h-full w-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
