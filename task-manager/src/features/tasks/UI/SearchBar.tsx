import { useState, useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { searchTasks } from '@tasksSlice';
import '@styles/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchTasks(searchTerm));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchTasks(searchTerm));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, dispatch]);


  const handleClear = () => {
    setSearchTerm('');
    dispatch(searchTasks(''));
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;