import EventCollection from '../features/Event/EventCollection';

const ViewEvents = () => {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <h2 className="font-[Montserrat] text-3xl font-semibold">View Events</h2>
      <EventCollection />
    </div>
  );
};

export default ViewEvents;
