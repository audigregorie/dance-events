import { useQuery } from '@tanstack/react-query';
import EventCard from './EventCard';
import { Event } from '../../interfaces/common';
import { fetchEvents } from '../../services/api/eventsApi';

const EventCollection = ({ limit }: { limit?: number }) => {
  const {
    data: events,
    isLoading,
    error
  } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: fetchEvents,
    retry: 1,
    staleTime: 1000 * 60 * 5
  });

  const displayedEvents = events ? events.slice(0, limit) : events;

  if (isLoading) return <p className="text-center text-lg text-gray-600">Loading events...</p>;
  if (error) return <p className="text-center text-lg text-gray-600">Error loading events. Please try again.</p>;
  // if (!displayedEvents?.length) return <p className="text-center text-lg text-gray-600">No events found{search ? ` matching "${search}"` : ''}.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayedEvents?.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
};

export default EventCollection;
