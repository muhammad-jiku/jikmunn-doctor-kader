import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import doctors from '../../../Images/doctors.gif';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="bannerDetails">
          <div className="bannerDetailsLeft">
            <h1>
              <span style={{ color: '#400303' }}>Recover,</span>{' '}
              <span style={{ color: '#511010' }}>Heal</span>{' '}
              <span style={{ color: '#47341B' }}>&</span>{' '}
              <span style={{ color: '#681515' }}>Excel</span>
            </h1>
            <p>
              <strong style={{ color: '#823302' }}>
                Dr. Abdul kader Pintu{' '}
              </strong>{' '}
              is a experienced medicine specialist. He serves his patient with
              the most professional way. He has mind-blowing surgery record in
              just 3 years. He also known for his diabetology study. An academic
              leader wirhin the field, he is commited to determining the
              appropiate procedure for each individual patient.
            </p>
            <Button onClick={() => navigate('/services')}>Read More</Button>
          </div>
          <div className="bannerDetailsRight">
            <img src={doctors} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
