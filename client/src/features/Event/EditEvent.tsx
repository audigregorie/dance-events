import { useParams } from 'react-router-dom';
import EventForm from './EventForm';
import { Event } from '../../interfaces/common';
import { useEditEvent } from '../../hooks/useEventMutations';
import { useEventQuery } from '../../hooks/useEventQueries';

const EditEvent = () => {
  const { id } = useParams();
  if (!id) return <p className="text-red-500">Error: Event not found.</p>;

  const { data: event, isLoading, error } = useEventQuery(id);
  const editMutation = useEditEvent(id);

  const handleEdit = async (updatedData: Partial<Event>) => {
    try {
      await editMutation.mutateAsync(updatedData);
    } catch (err) {
      console.error('Failed to update event:', err);
    }
  };

  if (isLoading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">Failed to load event details.</p>;
  if (!event) return <p>Event not found</p>;

  return <EventForm title="Edit Event" existingEventData={event} onSubmit={handleEdit} isLoading={editMutation.isPending} />;
};

export default EditEvent;
