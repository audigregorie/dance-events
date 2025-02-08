import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Event, EventFormProps } from '../../interfaces/common';
import Input from '../../components/Input';
import { EventKeys } from '../../utils/constants';
import Textarea from '../../components/Textarea';
import { useNavigate } from 'react-router-dom';

const defaultEventData: Partial<Event> = {
  image_url: '',
  event_name: '',
  description: '',
  location: '',
  address: '',
  city: '',
  state: '',
  country: '',
  ticket_price: undefined,
  currency: '',
  event_type: '',
  event_category: '',
  video_url: '',
  social_media: '',
  website: '',
  booking_url: '',
  notes: ''
};

const EventForm = ({ title, existingEventData, onSubmit, isLoading }: EventFormProps) => {
  const [formData, setFormData] = useState<Partial<Event>>(defaultEventData);
  const navigate = useNavigate();

  const convertToNumber = (value: string | undefined): number | undefined => {
    if (value === undefined || value === '') return undefined;
    const numericValue = Number(value);
    return isNaN(numericValue) ? undefined : numericValue;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === EventKeys.TICKET_PRICE ? convertToNumber(value) : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/events');
  };

  useEffect(() => {
    if (existingEventData) {
      setFormData({ ...defaultEventData, ...existingEventData });
    }
  }, [existingEventData]);

  return (
    <section className="mt-16 flex justify-center">
      <form onSubmit={handleSubmit} className="flex w-[70rem] flex-col gap-4 rounded-3xl border bg-white p-8 shadow-lg">
        <div className="mb-4 flex justify-center">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <Input label="Image URL" id={EventKeys.IMAGE_URL} name={EventKeys.IMAGE_URL} value={formData.image_url || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Event Name" id={EventKeys.EVENT_NAME} name={EventKeys.EVENT_NAME} value={formData.event_name || ''} onChange={handleChange} className={styles.formInput} required />
            <Textarea label="Description" id={EventKeys.DESCRIPTION} name={EventKeys.DESCRIPTION} value={formData.description || ''} onChange={handleChange} className={styles.formInput} optional />
            <Input label="Location" id={EventKeys.LOCATION} name={EventKeys.LOCATION} value={formData.location || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Address" id={EventKeys.ADDRESS} name={EventKeys.ADDRESS} value={formData.address || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="City" id={EventKeys.CITY} name={EventKeys.CITY} value={formData.city || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="State" id={EventKeys.STATE} name={EventKeys.STATE} value={formData.state || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Country" id={EventKeys.COUNTRY} name={EventKeys.COUNTRY} value={formData.country || ''} onChange={handleChange} className={styles.formInput} required />
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <Input label="Ticket Price" type="number" id={EventKeys.TICKET_PRICE} name={EventKeys.TICKET_PRICE} value={formData.ticket_price !== undefined ? formData.ticket_price.toString() : ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Currency" id={EventKeys.CURRENCY} name={EventKeys.CURRENCY} value={formData.currency || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Event Type" id={EventKeys.EVENT_TYPE} name={EventKeys.EVENT_TYPE} value={formData.event_type || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Event Category" id={EventKeys.EVENT_CATEGORY} name={EventKeys.EVENT_CATEGORY} value={formData.event_category || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Video URL" id={EventKeys.VIDEO_URL} name={EventKeys.VIDEO_URL} value={formData.video_url || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Social Media" id={EventKeys.SOCIAL_MEDIA} name={EventKeys.SOCIAL_MEDIA} value={formData.social_media || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Website" id={EventKeys.WEBSITE} name={EventKeys.WEBSITE} value={formData.website || ''} onChange={handleChange} className={styles.formInput} required />
            <Input label="Booking URL" id={EventKeys.BOOKING_URL} name={EventKeys.BOOKING_URL} value={formData.booking_url || ''} onChange={handleChange} className={styles.formInput} required />
            <Textarea label="Notes" id={EventKeys.NOTES} name={EventKeys.NOTES} value={formData.notes || ''} onChange={handleChange} className={styles.formInput} optional />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end">
          <button type="submit" disabled={isLoading} className="w-1/6 self-center rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:opacity-50">
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};
const styles = {
  formControlContainer: 'flex flex-col gap-2 mb-2', // Margin bottom for spacing
  formLabelContainer: 'flex items-center gap-2',
  formlabel: 'text-sm font-semibold text-gray-700',
  formInput: 'w-full rounded-lg border border-gray-300 px-4 py-2 shadow-md outline-none',
  formOptional: 'text-xs text-gray-400'
};

export default EventForm;
