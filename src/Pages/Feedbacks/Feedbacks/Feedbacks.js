import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFeedBack from '../../../CustomHooks/useFeedBack/useFeedBack';
import Feedback from '../Feedback/Feedback';

const Feedbacks = () => {
  const [feedbacks] = useFeedBack();
  return (
    <Container>
      <h1 className="formDesignHeading">Patients's feedback</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {feedbacks.map((feedBack) => (
          <Feedback key={feedBack?._id} feedBack={feedBack} />
        ))}
      </Row>
    </Container>
  );
};

export default Feedbacks;
