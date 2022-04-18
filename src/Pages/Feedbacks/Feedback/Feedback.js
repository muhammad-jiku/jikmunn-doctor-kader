import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import './Feddback.css';
import { Col } from 'react-bootstrap';

const Feedback = ({ feedBack }) => {
  console.log(feedBack);

  const { name, pic, feedback, date, ratings } = feedBack;
  return (
    <Col>
      <div className="feedbackSectionCard">
        <div className="feedbackSectionCardProfile">
          <img src={pic} alt={name} />
          <h3>{name}</h3>
        </div>
        <div className="feedbackSectionInfo">
          <h3>{ratings}</h3>
          <StarIcon className="feedbackSectionInfoStar" />
          <p>
            <small>{date}</small>
          </p>
        </div>
        <p className="feedbackSectionQuote">
          <span className="quote">“</span>
          {feedback}
          <span className="quote">”</span>
        </p>
      </div>
    </Col>
  );
};

export default Feedback;
