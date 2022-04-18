import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footerSection">
      <p>&copy;copyright {date.getFullYear()}</p>
      <p>
        This site is developed by{' '}
        <span className="authorName">
          <Link to="/about">JIKMUNN</Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
