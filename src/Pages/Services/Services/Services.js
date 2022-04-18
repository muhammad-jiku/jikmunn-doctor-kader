import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../CustomHooks/useServices/useServices';
import Service from '../Service/Service';

const Services = () => {
  const [services] = useServices();
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((serve) => (
          <Service key={serve?._id} serve={serve} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
