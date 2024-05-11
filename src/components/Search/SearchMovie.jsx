import css from './SearchMovie.module.css';

import { FiSearch } from 'react-icons/fi';
const SearchMovie = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query) return;
    onSearch(query);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        placeholder="What film do you search?"
        name="search"
        className={css.input}
        required
        autoFocus
      />
      <button className={css.btn} type="submit">
        <FiSearch size="20px" />
      </button>
    </form>
  );
};

export default SearchMovie;