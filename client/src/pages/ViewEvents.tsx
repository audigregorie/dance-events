import { useQuery } from '@tanstack/react-query';
import Search from '../components/Search';
import EventCollection from '../features/Event/EventCollection';
import { useState } from 'react';
import { fetchEvents } from '../services/api/eventsApi';
import { Event } from '../interfaces/common';

const ViewEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: events = [],
    isLoading,
    error
  } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: fetchEvents,
    retry: 1
  });

  const filteredEvents = searchTerm ? events.filter((event) => event.event_name.toLowerCase().includes(searchTerm.toLowerCase())) : events;

  if (isLoading) return <p className="text-center text-lg text-gray-600">Loading events...</p>;
  if (error) return <p className="text-center text-lg text-gray-600">Error loading events. Please try again.</p>;

  return (
    <div className="mt-8 flex flex-col gap-8">
      <h2 className="font-[Montserrat] text-3xl font-semibold">View Events</h2>
      <Search onSearch={setSearchTerm} searchTerm={searchTerm} />
      <EventCollection events={filteredEvents} searchTerm={searchTerm} />
    </div>
  );
};

export default ViewEvents;
