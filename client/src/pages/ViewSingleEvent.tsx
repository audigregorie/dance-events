import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchEventById } from '../services/api/eventsApi';

const ViewSingleEvent = () => {
  const { id } = useParams();

  const {
    data: event,
    isLoading,
    error
  } = useQuery({
    queryKey: ['event', id],
    queryFn: id ? () => fetchEventById(id) : undefined,
    enabled: !!id,
    retry: 1
  });

  if (isLoading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">Failed to load event details.</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold">{event.event_name}</h1>
      <img src={event.image_url} alt={event.event_name} className="mt-4 max-h-96 w-full rounded-lg object-cover" />

      <div className="mt-4">
        <p className="text-gray-600">{event.description}</p>
        <p className="text-gray-600">
          📍 {event.city}, {event.state}, {event.country}
        </p>
        <p className="text-gray-600">
          🎟 {event.currency} {event.ticket_price}
        </p>
        <p className="text-gray-600">📌 Category: {event.event_category}</p>
        <p className="text-gray-600">🎭 Type: {event.event_type}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {event.website && (
          <Link to={event.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Visit Website
          </Link>
        )}
        {event.booking_url && (
          <Link to={event.booking_url} className="text-green-500" target="_blank" rel="noopener noreferrer">
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default ViewSingleEvent;
