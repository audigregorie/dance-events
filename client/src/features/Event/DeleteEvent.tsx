import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEvent } from '../../services/api/eventsApi';

const DeleteEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deleteEvent(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    }
  });

  const handleDelete = async () => {
    if (!id) {
      console.error('Event ID is missing.');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      try {
        await deleteMutation.mutateAsync();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="mt-4 text-red-600 hover:text-red-800" disabled={deleteMutation.isPending}>
      {deleteMutation.isPending ? 'Deleting...' : 'Delete Event'}
    </button>
  );
};

export default DeleteEvent;
