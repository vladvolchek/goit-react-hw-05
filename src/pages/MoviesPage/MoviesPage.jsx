import { useState, useEffect } from 'react';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import { getFilms } from '../../api';
import MovieDetails from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loaders/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movie() {
  const location = useLocation();
  console.log('movie', location);

  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeSearch = newSearch => {
    params.set('search', newSearch);
    setParams(params);
  };

  const searchFilms = async query => {
    try {
      setLoading(true);
      const response = await getFilms(query);
      setFilms(response.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (search.trim() !== '') {
      searchFilms(search);
    }
  }, [search]);

  return (
    <div>
      {error && <p>Oops! Something went wrong. Please try again later.</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchMovie onSearch={changeSearch} value={search} />
          {films.length > 0 && <MovieDetails items={films} />}
        </>
      )}
    </div>
  );
}

// {loading && <Loader />}
// <SearchMovie onSearch={changeSearch} value={search} />

// {films.length > 0 && <MovieDetails items={films} />}