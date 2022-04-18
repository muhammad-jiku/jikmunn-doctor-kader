import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFeedback from '../../../CustomHooks/useFeedBack/useFeedBack';
import Feedback from '../../Feedbacks/Feedback/Feedback';

const FeedbacksViewHome = () => {
  const [feedbacks] = useFeedback();
  return (
    <Container>
      {console.log(feedbacks)}
      <h2>Available Feedbacks:</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {feedbacks.slice(1, 4).map((feedBack) => (
          <Feedback key={feedBack?._id} feedBack={feedBack} />
        ))}
      </Row>
    </Container>
  );
};

export default FeedbacksViewHome;
