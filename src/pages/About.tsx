
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight">About FindIt</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A unified digital platform designed to streamline the discovery of academic and
              extracurricular events such as hackathons, workshops, competitions, and fests.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                FindIt addresses the challenge of scattered event listings by creating a centralized, user-friendly, and automated event aggregation platform. By integrating multiple sources, offering real-time updates, and providing advanced filtering and calendar synchronization, it ensures that students have seamless access to all relevant academic and extracurricular opportunities in one place.
              </p>
              <p className="text-lg">
                We believe that every student should have equal access to opportunities that enhance their learning, networking, and skill development, regardless of their institution or background.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Key Objectives</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-findit-purple text-white flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Unified Event Aggregation</h4>
                    <p className="text-muted-foreground">Create a single platform for hackathons, workshops, competitions, and fests</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-findit-blue text-white flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Automated Event Scraping</h4>
                    <p className="text-muted-foreground">Develop systems that fetch event data from various platforms automatically</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-findit-teal text-white flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Advanced Filtering</h4>
                    <p className="text-muted-foreground">Allow personalized event discovery based on interests and preferences</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-findit-pink text-white flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-medium">Calendar Integration</h4>
                    <p className="text-muted-foreground">Enable adding events to personal calendars with timely reminders</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">Problem Statement</h2>
            <p className="text-lg mb-8">
              Despite the increasing availability of digital platforms for event discovery, students still face significant challenges in finding and tracking relevant opportunities such as hackathons, workshops, competitions, and fests.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Scattered Event Listings</h3>
                <p>Events are listed across multiple platforms, requiring students to manually check different sources to stay informed.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Lack of a Centralized Hub</h3>
                <p>There is no unified platform that aggregates diverse events in a structured and accessible manner.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Inconsistent Event Updates</h3>
                <p>Many event organizers update listings on social media or independent websites, making it difficult to receive timely updates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Limited Personalization</h3>
                <p>Existing platforms lack robust filtering options that allow students to find events based on their specific interests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-purple/10 text-findit-purple mb-4">
                  <span className="font-semibold">01</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Requirements Analysis</h3>
                <p className="text-muted-foreground">
                  We conducted extensive market research and competitor analysis to identify the strengths and weaknesses of existing event aggregation platforms. We gathered feedback from students, event organizers, and university representatives to define essential features for FindIt.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-blue/10 text-findit-blue mb-4">
                  <span className="font-semibold">02</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  We designed intuitive user interfaces focusing on seamless event browsing and filtering. The responsive web application was developed using React.js for cross-device compatibility, with features for real-time event updates and calendar integration.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-teal/10 text-findit-teal mb-4">
                  <span className="font-semibold">03</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  We implemented a backend using Node.js/Express.js to manage data retrieval, authentication, and event updates. The database management system uses MongoDB to store event data, user preferences, and activity logs, with automated web scrapers and API connectors.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-findit-pink/10 text-findit-pink mb-4">
                  <span className="font-semibold">04</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Testing and Deployment</h3>
                <p className="text-muted-foreground">
                  We developed comprehensive test cases for frontend and backend components to ensure system reliability. Security testing was performed, especially on data aggregation pipelines and authentication mechanisms, before a phased deployment approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-findit-purple to-findit-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to explore events?</h2>
            <p className="mt-4 text-lg text-white/80">
              Start discovering hackathons, workshops, competitions, and fests that match your interests.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
