import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../../pages/Home';
import NavBar from '../Navigation/NavBar';
// import Movie from '../../pages/Movie';
// import NotFoundPage from '../NotFoundPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import Cast from '../Cast';
// import Reviews from '../Reviews';
function App() {
  const Home = lazy(() => import('../../pages/HomePage/Home'));
  const Movie = lazy(() => import('../../pages/MoviesPage/Movie'));
  const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
  const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
  const Cast = lazy(() => import('../MovieCast/Cast'));
  const Reviews = lazy(() => import('../MovieReviews/Reviews'));

  return (
    <>
      <NavBar />
      <Suspense fallback={<b>Loading page</b>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MoviesPage" element={<Movie />} />
          <Route path="/MoviesPage/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;

