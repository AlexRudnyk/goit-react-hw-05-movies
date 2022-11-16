import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  inputValue: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const Movies = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={{ inputValue: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="inputValue" />
        <button type="submit">Search</button>
        <ErrorMessage name="inputValue" component="div" />
      </Form>
    </Formik>
  );
};

export default Movies;
