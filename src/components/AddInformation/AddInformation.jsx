import { Box } from 'components/Box';
import { Link } from 'react-router-dom';

const AddInformation = () => {
  return (
    <>
      <Box borderTop="normal" borderBottom="normal">
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default AddInformation;
