import EventForm from './EventForm';
import { Event } from '../../interfaces/common';
import { useCreateEvent } from '../../hooks/useEventMutations';

const CreateEvent = () => {
  const createMutation = useCreateEvent();

  const handleCreateEvent = async (eventData: Partial<Event>) => {
    try {
      await createMutation.mutateAsync(eventData);
    } catch (err) {
      console.error('Error creating event mutation:', err);
      throw new Error('Failed creating event mutation');
    }
  };

  return <EventForm onSubmit={handleCreateEvent} title="Let's create your event" />;
};

export default CreateEvent;
