import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <h3 className="text-center">&copy;copyright{date.getFullYear()}</h3>
    </div>
  );
};

export default Footer;
