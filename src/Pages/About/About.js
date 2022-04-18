import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../Images/pic_1.jpg';
import './About.css';

const About = () => {
  return (
    <Container>
      <div className="aboutSection">
        <div className="aboutSectionLeft">
          <img src={pic} alt="" />
        </div>
        <div className="aboutSectionRight">
          <p>
            Hi! My name is{' '}
            <span className="aboutSectionRightName">
              Muhammad Azizul Hoque Jiku
            </span>
            . Welcome to Dr.Abdul Kader's personal site that I've designed. I'd
            love to be fullstack web-developer. I'd like to call myself "a
            passionate day dreamer". Right now, I am learning about
            web-development. My dreams, goals all set to be the fullstack
            web-developer.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
