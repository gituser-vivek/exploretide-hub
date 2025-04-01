
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventCard from '@/components/EventCard';
import EventFilters from '@/components/EventFilters';
import { Button } from '@/components/ui/button';
import { mockEvents } from '@/data/mockEvents';

const Events = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // Use category from URL or default to 'all'
  const [activeCategory, setActiveCategory] = useState(categoryParam?.toLowerCase() || 'all');
  
  // Filter events based on active category
  const filteredEvents = activeCategory === 'all' 
    ? mockEvents 
    : mockEvents.filter(event => event.category.toLowerCase() === activeCategory);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Events</h1>
          <p className="text-muted-foreground">
            Discover hackathons, workshops, competitions, and fests from around the world
          </p>
        </div>
        
        <EventFilters />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="text-lg font-semibold">No events found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your filters or check back later</p>
          </div>
        )}
        
        {filteredEvents.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
