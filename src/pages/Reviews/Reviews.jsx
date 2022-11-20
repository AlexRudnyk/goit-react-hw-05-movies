import { fetchMovieReviews } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './Reviews.styled';
import Spinner from '../../components/Spinner';
import { ReviewsError } from 'components/MovieDetailsError/ReviewsError/ReviewsError';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;
    async function fetchReviews() {
      setStatus('pending');
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <div>
        {status === 'pending' && <Spinner />}
        {status === 'resolved' && (
          <ul>
            {reviews.results.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </ReviewItem>
            ))}
          </ul>
        )}
        {status === 'rejected' && <ReviewsError />}
      </div>
    </>
  );
};

export default Reviews;
