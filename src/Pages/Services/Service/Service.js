import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ serve }) => {
  console.log(serve);
  const { _id, name, image, description, fee } = serve;

  const navigate = useNavigate();

  const navigateToServices = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <Col>
      <div className="serviceSectionCard">
        <Image src={image} alt={name} fluid />
        <div className="serviceSectionInfo">
          <h3> {name} </h3>
          <h4>fee: ${fee} </h4>
          <p>{description}</p>
        </div>
        <Button onClick={() => navigateToServices(_id)}>
          Book Appointment
        </Button>
      </div>
    </Col>
  );
};

export default Service;
