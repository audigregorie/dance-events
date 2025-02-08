import { Link } from 'react-router-dom';
import EventCollection from '../features/Event/EventCollection';

const Home = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-8">
      <h2 className="font-[Montserrat] text-3xl font-semibold">Dance Events</h2>
      <EventCollection limit={8} />

      <div className="mt-4 flex w-full items-center justify-end">
        <Link to="/events" className="text-blue-500 hover:text-blue-700">
          View all events
        </Link>
      </div>
    </div>
  );
};

export default Home;
