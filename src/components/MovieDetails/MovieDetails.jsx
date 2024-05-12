import { Link, useLocation } from 'react-router-dom';

const MovieDetails = ({ items }) => {
  const location = useLocation();
  console.log('MD', location);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/MoviesPage/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieDetails;