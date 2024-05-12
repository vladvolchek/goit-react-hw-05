import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMoviesId } from '../../api';
import clsx from 'clsx';

import css from './MovieDetailsPage.module.css';
import BackLink from '../../components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  console.log(location.state);
  const backLinkRef = useRef(location.state);
  console.log('MDP:', backLinkRef);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMoviesId(movieId);

        setMovie(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
  }, [movieId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      {error && <p>Oops!</p>}
      <BackLink href={backLinkRef.current ?? '/MoviesPage'}>Back to all Movies</BackLink>

      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h2>
            User Score: <p>{movie.vote_average}</p>
          </h2>
          <p>{movie.overview}</p>
          <p className={css.text}>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <div className={css.nav}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<b>Loading page</b>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}