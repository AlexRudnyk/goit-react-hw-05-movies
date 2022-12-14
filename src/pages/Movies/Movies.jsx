import { fetchMoviesByQuery } from 'components/Api/Api';
import { Formik, Form, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { SearchInput, SearchButton, ItemLink, Item } from './Movies.styled';
import Spinner from '../../components/Spinner';
import { Error } from 'components/Error/Error';

const schema = yup.object().shape({
  inputValue: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    async function fetchItems() {
      setStatus('pending');
      try {
        const item = await fetchMoviesByQuery(query);
        setMovies(item.results);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchItems();
  }, [query]);

  const handleSubmit = ({ inputValue }, { resetForm }) => {
    setSearchParams({ query: inputValue });
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ inputValue: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <SearchInput
            type="text"
            name="inputValue"
            placeholder="Search movies"
          />
          <SearchButton type="submit">Search</SearchButton>
          <ErrorMessage name="inputValue" />
        </Form>
      </Formik>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <Item key={id}>
              <ItemLink to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </ItemLink>
            </Item>
          ))}
        </ul>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};

export default Movies;
