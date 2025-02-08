import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEvent } from '../../services/api/eventsApi';
import EventForm from './EventForm';
import { Event } from '../../interfaces/common';

const CreateEvent = () => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['events'] })
  });

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
