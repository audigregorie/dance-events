import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-center md:h-20">
      <Link to="/" className="flex items-center">
        <h1 className="h-8 text-2xl font-bold">Dance Events</h1>
      </Link>
    </header>
  );
};

export default Header;
