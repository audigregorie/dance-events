import EventCard from './EventCard';
import { Event } from '../../interfaces/common';

const EventCollection = ({ events, limit, searchTerm }: { events: Event[]; limit?: number; searchTerm?: string }) => {
  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="flex flex-col">
      {displayedEvents?.length ? (
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">No events found {searchTerm ? `matching: ${searchTerm}` : '.'}</p>
      )}
    </div>
  );
};

export default EventCollection;
