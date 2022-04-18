import React from 'react';
import Banner from '../Banner/Banner';
import FeedbacksViewHome from '../FeedbacksViewHome/FeedbacksViewHome';
import ServicesViewHome from '../ServicesViewHome/ServicesViewHome';

const Home = () => {
  return (
    <>
      <Banner />
      <ServicesViewHome />
      <FeedbacksViewHome />
    </>
  );
};

export default Home;
