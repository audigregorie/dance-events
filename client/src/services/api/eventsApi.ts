import { Event } from '../../interfaces/common';
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

export const createEvent = async (eventData: Partial<Event>) => {
  try {
    const res = await api.post<Partial<Event>>(`/events/create`, eventData);
    return res.data;
  } catch (err) {
    console.error('Error creating event:', err);
    throw new Error(`Failed to create event`);
  }
};

export const deleteEvent = async (id: string) => {
  try {
    await api.delete(`/events/${id}`);
  } catch (err) {
    console.error(`Error deleting event ${id}:`, err);
    throw new Error('Failed to delete event');
  }
};

export const editEvent = async (id: string, updatedData: Partial<Event>) => {
  try {
    const res = await api.put(`/events/edit/${id}`, updatedData);
    return res.data;
  } catch (err) {
    console.error(`Error updating event ${id}:`, err);
    throw new Error('Failed to update event');
  }
};
