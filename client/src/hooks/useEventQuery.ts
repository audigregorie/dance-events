import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchEventById, fetchEvents } from '../services/api/eventsApi';

export const useEventsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    initialPageParam: 1,
    retry: 1
  });
};

export const useEventQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ['events', id],
    queryFn: id ? () => fetchEventById(id) : undefined,
    enabled: !!id,
    retry: 1
  });
};
