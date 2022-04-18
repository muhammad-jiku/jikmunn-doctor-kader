import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../../Images/pikabu.gif';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container>
      <div className="showError">
        <Image src={Error} alt="" fluid />
        <h4>
          You're lost dear go back to the{' '}
          <Link to="/" className="showHome">
            Home
          </Link>{' '}
        </h4>
      </div>
    </Container>
  );
};

export default NotFound;
