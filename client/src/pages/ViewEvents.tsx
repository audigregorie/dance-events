import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useRef, useCallback } from 'react';
import Search from '../components/Search';
import EventCollection from '../features/Event/EventCollection';
import { fetchEvents } from '../services/api/eventsApi';
import { Event } from '../interfaces/common';

const ViewEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useInfiniteQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    initialPageParam: 1,
    retry: 1
  });

  const events: Event[] = data?.pages.flatMap((page) => page.events) || [];

  const observer = useRef<IntersectionObserver | null>(null);
  const lastEventRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, isFetchingNextPage, hasNextPage]
  );

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
