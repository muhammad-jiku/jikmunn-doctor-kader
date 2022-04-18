import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../CustomHooks/useServices/useServices';
import Service from '../../Services/Service/Service';

const ServicesViewHome = () => {
  const [services] = useServices();
  return (
    <Container>
      <h1 className="formDesignHeading">Services you might need</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.slice(1, 4).map((serve) => (
          <Service key={serve?._id} serve={serve} />
        ))}
      </Row>
    </Container>
  );
};

export default ServicesViewHome;
