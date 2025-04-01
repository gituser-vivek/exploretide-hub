
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface EventFiltersProps {
  isCompact?: boolean;
}

const EventFilters: React.FC<EventFiltersProps> = ({ isCompact = false }) => {
  return (
    <>
      {/* Mobile Filter Menu */}
      <div className="md:hidden w-full py-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="w-full appearance-none bg-background pl-8"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Filters</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        {['All', 'Hackathons', 'Workshops', 'Competitions', 'Fests'].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <RadioGroupItem value={category} id={`category-${category}`} />
                            <Label htmlFor={`category-${category}`}>{category}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Mode</h4>
                      <div className="space-y-2">
                        {['All', 'Online', 'Offline', 'Hybrid'].map((mode) => (
                          <div key={mode} className="flex items-center space-x-2">
                            <RadioGroupItem value={mode} id={`mode-${mode}`} />
                            <Label htmlFor={`mode-${mode}`}>{mode}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Time Frame</h4>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time frame" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="this-month">This Month</SelectItem>
                          <SelectItem value="past">Past Events</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Switch id="open-registration" />
                      <Label htmlFor="open-registration">Open Registration</Label>
                    </div>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
          {['All', 'Hackathons', 'Workshops', 'Competitions', 'Fests'].map((category) => (
            <Button key={category} variant="outline" size="sm" className="shrink-0">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Filter Menu */}
      <div className="hidden md:block w-full">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="w-full appearance-none bg-background pl-8"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!isCompact && (
            <div className="flex flex-wrap gap-2">
              <Button variant="default">All</Button>
              <Button variant="outline">Hackathons</Button>
              <Button variant="outline">Workshops</Button>
              <Button variant="outline">Competitions</Button>
              <Button variant="outline">Fests</Button>
              
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1 h-8">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  More Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-1 h-8">
                  <X className="h-3.5 w-3.5" />
                  Clear
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventFilters;
