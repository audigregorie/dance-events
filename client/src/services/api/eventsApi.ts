import { api } from './axiosInstance';

export const fetchEvents = async () => {
  try {
    const res = await api.get('/events');

    console.log(res.data);
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 404) return [];

    console.error('Error fetching events:', err);
    throw new Error(`Failed to fetch events`);
  }
};

export const fetchEventById = async (id: string) => {
  try {
    const res = await api.get(`/events/${id}`);
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 404) throw new Error('Event not found');

    console.error(`Error fetching event by ${id}:`, err);
    throw new Error(`Failed to fetch event by ${id}`);
  }
};
