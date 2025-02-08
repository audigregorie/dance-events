import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ViewEvents from '../pages/ViewEvents';
import ViewSingleEvent from '../pages/ViewSingleEvent';
import CreateEvent from '../features/Event/CreateEvent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/events',
        element: <ViewEvents />
      },
      {
        path: '/events/:id',
        element: <ViewSingleEvent />
      },
      {
        path: '/events/create',
        element: <CreateEvent />
      }
    ]
  }
]);
