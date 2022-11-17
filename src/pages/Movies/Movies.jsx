import { fetchMoviesByQuery } from 'components/Api/Api';
import { Formik, Form, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { SearchInput, SearchButton, ItemLink, Item } from './Movies.styled';

const schema = yup.object().shape({
  inputValue: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function fetchItems() {
      try {
        const item = await fetchMoviesByQuery(query);
        setMovies(item.results);
      } catch (error) {
        setError(error);
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
      {movies.length !== 0 && !error && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <Item key={id}>
              <ItemLink to={`/movies/${id}`}>{title || name}</ItemLink>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
