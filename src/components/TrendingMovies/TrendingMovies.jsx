import { Link, useLocation } from 'react-router-dom';
import css from './TrendingMovies.module.css';

const TrendingMovies = ({ items }) => {
  const location = useLocation();
  console.log('TM', location);

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingMovies;

/// function createMarkup(array) {
//   return (
//     <ul>
//       {array.map(item => {
//         return (
//           <li key={item.id}>
//             <Link to={'/movies/' + item.id} state={location}>
//               {item.title}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }