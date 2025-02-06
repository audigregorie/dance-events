import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
