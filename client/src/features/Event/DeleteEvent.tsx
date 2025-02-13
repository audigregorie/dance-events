import { useParams } from 'react-router-dom';
import { useDeleteEvent } from '../../hooks/useEventMutations';

const DeleteEvent = () => {
  const { id } = useParams();
  if (!id) return <p className="text-red-500">Error: Event not found.</p>;

  const deleteMutation = useDeleteEvent(id);

  const handleDelete = async () => {
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
    <button onClick={handleDelete} className="text-red-600 hover:text-red-800" disabled={deleteMutation.isPending}>
      {deleteMutation.isPending ? 'Deleting...' : 'Delete Event'}
    </button>
  );
};

export default DeleteEvent;
