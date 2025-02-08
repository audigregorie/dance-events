import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { editEvent, fetchEventById } from '../../services/api/eventsApi';
import EventForm from './EventForm';
import { Event } from '../../interfaces/common';

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: event,
    isLoading,
    error
  } = useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEventById(id!),
    enabled: !!id,
    retry: 1
  });

  const editMutation = useMutation({
    mutationFn: (updatedData: Partial<Event>) => editEvent(id!, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event', id] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    },
    onError: (err) => {
      console.error('Failed to update event:', err);
    }
  });

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
