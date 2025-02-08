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

export interface EventFormProps {
  title?: string;
  existingEventData?: Event;
  onSubmit: (data: Partial<Event>) => void | Promise<void>;
  isLoading?: boolean;
}

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  optional?: boolean;
  className: string;
}

export interface TextareProps {
  id: string;
  label: string;
  name: string;
  value?: string;
  rows?: number;
  optional?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
}
