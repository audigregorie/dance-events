import { ChangeEvent } from 'react';
import { SearchProps } from '../interfaces/common';

const Search = ({ onSearch, searchTerm }: SearchProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <input type="text" placeholder="Search events..." value={searchTerm} onChange={handleSearch} className="w-full max-w-md rounded-full border border-gray-300 px-4 py-2 outline-none" />
    </div>
  );
};

export default Search;
