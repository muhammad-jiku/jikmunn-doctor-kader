import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../Images/pic_1.jpg';

const About = () => {
  return (
    <>
      <Container fluid>
        <img src={pic} alt="" />
        <p>
          Hi! My name is Muhammad Azizul Hoque Jiku. Welcome to my personal page
          that I've designed to showcase my skills and expertise that I've
          accumulated over the year. I've also placed all my social links at the
          left side, feel free to connect with me. I'd love to be given the
          opportunity to hear from you. I like to call myself “a passionate
          computer science teacher”. I always had a wish on my mind that I will
          do something for the computer science students that's why I made lots
          of videos on different subjects. My first priority is making the
          subject more interesting and clear so you can feel it and don't get
          bore.
        </p>
      </Container>
    </>
  );
};

export default About;
