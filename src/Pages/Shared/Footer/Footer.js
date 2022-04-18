import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footerSection">
      <h3>&copy;copyright {date.getFullYear()}</h3>
      <h4>
        This site is developed by{' '}
        <span className="authorName">
          <Link to="/about">JIKMUNN</Link>
        </span>
      </h4>
    </div>
  );
};

export default Footer;
