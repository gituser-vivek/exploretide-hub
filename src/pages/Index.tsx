
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Search, Filter, TrendingUp, ArrowRight } from 'lucide-react';
import EventCard from '@/components/EventCard';
import { mockEvents } from '@/data/mockEvents';

const Index = () => {
  const featuredEvents = mockEvents.filter(event => event.featured).slice(0, 3);
  const upcomingEvents = mockEvents.slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Discover Academic & Extracurricular Events in One Place
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                FindIt streamlines the discovery of hackathons, workshops, competitions, and fests. 
                Never miss an opportunity to learn, network, and develop your skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/events">Explore Events</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-10 w-10 rounded-full border-2 border-background bg-gray-200"></div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">2,000+</span> students already using FindIt
                </p>
              </div>
            </div>
            <div className="relative md:h-[500px] flex items-center justify-center">
              <div className="absolute w-[150%] md:w-[120%] aspect-square bg-gradient-to-br from-findit-purple/20 to-findit-blue/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative flex flex-col gap-6 max-w-md z-10">
                <div className="bg-white rounded-lg shadow-xl p-4 animate-float">
                  <h3 className="font-semibold">National Coding Hackathon</h3>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Oct 15-16, 2023</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Online</span>
                  </div>
                  <Badge className="mt-3 bg-findit-purple text-white">Hackathon</Badge>
                </div>
                
                <div className="bg-white rounded-lg shadow-xl p-4 ml-12 animate-float" style={{animationDelay: '0.5s'}}>
                  <h3 className="font-semibold">AI Workshop Series</h3>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Nov 5, 2023</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>San Francisco, CA</span>
                  </div>
                  <Badge className="mt-3 bg-findit-blue text-white">Workshop</Badge>
                </div>
                
                <div className="bg-white rounded-lg shadow-xl p-4 animate-float" style={{animationDelay: '1s'}}>
                  <h3 className="font-semibold">TechFest 2023</h3>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Dec 10-12, 2023</span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>New York City</span>
                  </div>
                  <Badge className="mt-3 bg-findit-pink text-white">Fest</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to stay ahead</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FindIt combines powerful features to help you discover, filter, and manage events that match your interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-purple/10 text-findit-purple mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Smart Discovery</h3>
              <p className="text-muted-foreground">
                Find relevant events with powerful search and filtering options. Never miss an opportunity that matches your interests.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-blue/10 text-findit-blue mb-4">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Advanced Filtering</h3>
              <p className="text-muted-foreground">
                Filter events by category, date, location, or mode of participation (online/offline) to find your perfect match.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-teal/10 text-findit-teal mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground">
                Get the latest information on new events, registration deadlines, and updates from event organizers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Events</h2>
              <p className="mt-2 text-muted-foreground">
                Discover the most popular opportunities this month
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link to="/events" className="gap-1">
                View all events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
              <p className="mt-2 text-muted-foreground">
                Don't miss these events coming up soon
              </p>
            </div>
            <Button variant="ghost" asChild className="mt-4 md:mt-0">
              <Link to="/events" className="gap-1">
                View all events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-findit-purple to-findit-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to discover your next opportunity?</h2>
            <p className="mt-4 text-lg text-white/80">
              Join thousands of students using FindIt to discover events, competitions, and workshops that help them grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
