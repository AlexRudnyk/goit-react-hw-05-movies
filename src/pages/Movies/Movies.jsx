import { fetchMoviesByQuery } from 'components/Api/Api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';

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
          <Field type="text" name="inputValue" placeholder="Search movies" />
          <button type="submit">Search</button>
          <ErrorMessage name="inputValue" />
        </Form>
      </Formik>
      {movies.length !== 0 && !error && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
