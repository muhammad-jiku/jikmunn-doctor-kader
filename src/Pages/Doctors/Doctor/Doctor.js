import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Doctor = ({ doc }) => {
  console.log(doc);
  const { _id, name, image, star, available, fee, speciality } = doc;

  const navigate = useNavigate();

  const navigateToDoctor = (id) => {
    navigate(`/doctor/${id}`);
  };
  return (
    <>
      <Col>
        <Card className="customCard">
          <Image
            variant="top"
            src={image}
            alt={name}
            fluid
            rounded
            //   className="customCardImage"
            style={{ height: '300px' }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-dark">{speciality}</Card.Text>
            <Card.Text className="text-warning">${fee}</Card.Text>
            <Card.Text className="text-warning">{star}</Card.Text>
            <Card.Text>
              <small className="text-muted">{available}</small>
            </Card.Text>
          </Card.Body>
          <Button
            className="btn btn-primary rounded"
            onClick={() => navigateToDoctor(_id)}
          >
            Book Appointment
          </Button>
        </Card>
      </Col>
    </>
  );
};

export default Doctor;
