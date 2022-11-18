import { useLocation } from 'react-router-dom';
import { Back } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();
  return <Back to={location?.state?.from ?? '/'}>Go back</Back>;
};

export default BackLink;
