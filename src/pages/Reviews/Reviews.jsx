import { fetchMovieReviews } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './Reviews.styled';
import Spinner from '../../components/Spinner';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Spinner />}
      {reviews.length !== 0 && !error && (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
