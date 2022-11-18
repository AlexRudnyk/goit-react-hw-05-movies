import { Box } from 'components/Box';
import { ItemLink, Item } from './AddInformation.styled';

const AddInformation = () => {
  return (
    <>
      <Box
        borderTop="normal"
        borderBottom="normal"
        px={4}
        boxShadow="0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;"
      >
        <h4>Additional information</h4>
        <ul>
          <Item>
            <ItemLink to="cast">Cast</ItemLink>
          </Item>
          <Item>
            <ItemLink to="reviews">Reviews</ItemLink>
          </Item>
        </ul>
      </Box>
    </>
  );
};

export default AddInformation;
