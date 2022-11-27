import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/api';
import { Item, List, Title } from './Review.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <Title>{review.author}</Title>
              <p>{review.content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for that movie</p>
      )}
    </div>
  );
};

export default Reviews;
