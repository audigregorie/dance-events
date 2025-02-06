import { Link } from 'react-router-dom';
import EventCollection from '../features/Event/EventCollection';
import dancerOne from '../assets/dancer-one.jpg';
import coupleDancers from '../assets/couple-dancers-one.jpg';
import dancerTwo from '../assets/dancer-two.jpg';

const Home = () => {
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex justify-center">
        <img src={dancerTwo} alt="" className="h-max-96 h-96" />
        <img src={coupleDancers} alt="" className="h-max-96 h-96" />
        <img src={dancerOne} alt="" className="h-max-96 h-96" />
      </div>
      <div className="mt-16 flex items-center justify-end">
        <Link to="/events" className="text-blue-500">
          View all events
        </Link>
      </div>
      <EventCollection limit={4} />
    </div>
  );
};

export default Home;
