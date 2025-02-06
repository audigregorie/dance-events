import { Link } from 'react-router-dom';
import { EventProp } from '../../interfaces/common';

const EventCard = ({ event }: EventProp) => {
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <Link to={`/events/${event.id}`}>
        <img src={event.image_url} alt={event.event_name} className="h-40 w-full rounded-md object-cover" />
      </Link>

      <div className="mt-2">
        <h2 className="text-xl font-semibold">{event.event_name}</h2>
        <p className="text-gray-600">
          {event.city}, {event.country}
        </p>
        <p className="text-gray-600">
          {event.currency} {event.ticket_price}
        </p>
      </div>

      <Link to={`/events/${event.id}`} className="mt-2 block text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
