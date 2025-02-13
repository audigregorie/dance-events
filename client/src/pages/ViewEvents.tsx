import { useState } from 'react';
import Search from '../components/Search';
import EventCollection from '../features/Event/EventCollection';
import { Event } from '../interfaces/common';
import { useEventsQuery } from '../hooks/useEventQueries';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ViewEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useEventsQuery();
  const lastEventRef = useIntersectionObserver({ fetchNextPage, hasNextPage, isFetchingNextPage });

  const events: Event[] = data?.pages.flatMap((page) => page.events) || [];
  const filteredEvents: Event[] = searchTerm ? events.filter((event) => event.event_name.toLowerCase().includes(searchTerm.toLowerCase())) : events;

  if (error) return <p className="text-center text-lg text-gray-600">Error loading events. Please try again.</p>;

  return (
    <div className="mt-8 flex flex-col gap-8">
      <h2 className="font-[Montserrat] text-3xl font-semibold">View Events</h2>
      <Search onSearch={setSearchTerm} searchTerm={searchTerm} />
      <EventCollection events={filteredEvents} searchTerm={searchTerm} lastEventRef={lastEventRef} />
      {isFetchingNextPage && <p className="text-center text-lg text-gray-600">Loading more events...</p>}
    </div>
  );
};

export default ViewEvents;
