import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between md:h-20">
      <div>
        <Link to="/" className="flex items-center">
          <h1 className="h-8 text-2xl font-bold">DE </h1>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/" className={styles.navLinks}>
          Home
        </Link>
        <Link to="/events" className={styles.navLinks}>
          Events
        </Link>
        <Link to="/events/create" className={styles.navLinks}>
          Create
        </Link>
      </div>
    </header>
  );
};

const styles = {
  navLinks: 'text-lg text-gray-600 hover:text-black'
};

export default Header;
