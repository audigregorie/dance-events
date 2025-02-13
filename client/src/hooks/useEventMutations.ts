import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEvent, deleteEvent, editEvent } from '../services/api/eventsApi';
import { Event } from '../interfaces/common';
import { useNavigate } from 'react-router-dom';

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createEvent,
    onSuccess: (newEvent: Partial<Event>) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      if (newEvent?.id) return navigate(`/events/${newEvent.id}`);
    }
  });
};

export const useDeleteEvent = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    }
  });
};

export const useEditEvent = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (updatedData: Partial<Event>) => editEvent(id, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event', id] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate(`/events/${id}`);
    }
  });
};
