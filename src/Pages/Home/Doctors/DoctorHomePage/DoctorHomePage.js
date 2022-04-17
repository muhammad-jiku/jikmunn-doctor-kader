import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const DoctorHomePage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('doctorsDetails.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, []);
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

export default DoctorHomePage;
