import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServicesDetails.css';

const ServicesDetails = () => {
  const navigate = useNavigate();
  const patientRef = useRef('');
  const descriptionRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const patientName = patientRef?.current?.value;
    const patientProblems = descriptionRef?.current?.value;

    alert('You have Submitted the form');
    navigate('/');
  };
  return (
    <Container>
      <div className="serviceDetailsContainer">
        <div className="serviceDetailsContainerLeft">
          <p>
            Hello there! My name is{' '}
            <span className="aboutSectionRightName">Dr.Abdul Kader</span>. I'm
            here to help you by give you instruction and treat you at the best
            way! Thank you for visiting the site and take care.
          </p>
        </div>
        <div>
          <div className="formDesign">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient name"
                  ref={patientRef}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Problems</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe your problem"
                  ref={descriptionRef}
                  required
                />
              </Form.Group>
              <button className="formDesignButton" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesDetails;
