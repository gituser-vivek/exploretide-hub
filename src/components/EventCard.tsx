
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EventProps {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  mode: 'online' | 'offline' | 'hybrid';
  category: string;
  image: string;
  url?: string;
  featured?: boolean;
}

const EventCard: React.FC<EventProps> = ({
  title,
  organizer,
  date,
  location,
  mode,
  category,
  image,
  url,
  featured = false
}) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'hackathon':
        return 'bg-findit-purple text-white';
      case 'workshop':
        return 'bg-findit-blue text-white';
      case 'competition':
        return 'bg-findit-teal text-white';
      case 'fest':
        return 'bg-findit-pink text-white';
      default:
        return 'bg-findit-purple text-white';
    }
  };
  
  const getModeColor = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'online':
        return 'bg-green-100 text-green-800';
      case 'offline':
        return 'bg-blue-100 text-blue-800';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={cn(
      "group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md",
      featured && "md:col-span-2 md:row-span-2"
    )}>
      <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
          <Badge className={getModeColor(mode)}>
            {mode}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{organizer}</p>
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center mb-4 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm">Save</Button>
          <Button asChild size="sm">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Register <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
