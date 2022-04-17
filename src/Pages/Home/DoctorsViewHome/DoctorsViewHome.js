import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../../CustomHooks/useDoctors/useDoctors';
import Doctor from '../../Doctors/Doctor/Doctor';

const DoctorsViewHome = () => {
  const [doctors] = useDoctors();
  return (
    <>
      <Container fluid>
        {console.log(doctors)}
        <h2>Available Services:</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {doctors.slice(1, 4).map((doc) => (
            <Doctor key={doc?._id} doc={doc} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DoctorsViewHome;
