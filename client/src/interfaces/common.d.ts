export interface Event {
  id: string;
  event_name: string;
  description: string;
  location: string;
  address: string;
  city: string;
  state: string;
  country: string;
  ticket_price: number;
  currency: string;
  event_type: string;
  event_category: string;
  image_url: string;
  video_url?: string;
  social_media?: string;
  website?: string;
  booking_url?: string;
  notes?: string;
}

export interface EventProp {
  event: Event;
}
