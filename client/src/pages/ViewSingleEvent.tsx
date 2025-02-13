import { Link, useParams } from 'react-router-dom';
import DeleteEvent from '../features/Event/DeleteEvent';
import { useState } from 'react';
import { useEventQuery } from '../hooks/useEventQueries';

const ViewSingleEvent = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const { id } = useParams();
  if (!id) return <p className="text-red-500">Error: Event not found.</p>;

  const { data: event, isLoading, error } = useEventQuery(id);

  if (isLoading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">Failed to load event details.</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="mt-16 flex flex-col gap-4">
      <div className="flex flex-col items-end justify-center gap-2 text-sm">
        <Link to={`/events/edit/${id}`} className="mt-4 text-gray-600 hover:text-blue-800">
          Modify Event
        </Link>
        <DeleteEvent />
      </div>

      <h1 className="text-3xl font-bold">{event.event_name}</h1>
      <img src={event.image_url} alt={event.event_name} className="max-h-96 w-full rounded-lg object-cover" />

      <p className="text-gray-600">{event.description}</p>
      <div className="">
        <p className="text-gray-600">
          📍 {event.city}, {event.state}, {event.country}
        </p>
        <p className="text-gray-600">
          🎟 {event.currency} {event.ticket_price}
        </p>
        <p className="text-gray-600">📌 Category: {event.event_category}</p>
        <p className="text-gray-600">🎭 Type: {event.event_type}</p>
      </div>

      <div className="flex flex-col items-start justify-center">
        <button onClick={() => setShowMoreInfo((prev) => !prev)} className="text-sm text-gray-600 underline">
          {showMoreInfo ? 'Less info' : 'More info'}
        </button>

        {showMoreInfo && (
          <div className="mt-4">
            <p className="text-gray-600">📧 Social Media: {event.social_media}</p>
            <p className="text-gray-600">🌐 Website: {event.website}</p>
            <p className="text-gray-600">📅 Booking URL: {event.booking_url}</p>
            <p className="text-gray-600">📝 Notes: {event.notes}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
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
