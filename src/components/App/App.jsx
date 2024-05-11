import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../../pages/Home';
import NavBar from '../NavBar/NavBar';
// import Movie from '../../pages/Movie';
// import NotFoundPage from '../NotFoundPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import Cast from '../Cast';
// import Reviews from '../Reviews';
function App() {
  const Home = lazy(() => import('../../pages/Home/Home'));
  const Movie = lazy(() => import('../../pages/movie/Movie'));
  const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));
  const MovieDetailsPage = lazy(() => import('../../pages/MoviedetailsPage/MovieDetailsPage'));
  const Cast = lazy(() => import('../Cast/Cast'));
  const Reviews = lazy(() => import('../Reviews/Reviews'));

  return (
    <>
      <NavBar />
      <Suspense fallback={<b>Loading page</b>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
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

