import { Link } from 'react-router-dom';
const BackLink = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};
export default BackLink;