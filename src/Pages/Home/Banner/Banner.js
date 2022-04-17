import React from 'react';
import { Container } from 'react-bootstrap';
import doctors from '../../../Images/doctors.gif';

const Banner = () => {
  return (
    <>
      <Container fluid>
        <div className="d-flex my-4">
          <div>
            <h1>Welcome to the doctor page</h1>
            <p>
              From unbroken while a stern said fast at home he. This the bird
              stillness by some doubtless, lenore and purple bird once, louder
              rapping thereis this muttered theeby placid within plainly and,
              whispered whispered his ever with nevernevermore implore lenore
              by, chamber that more then.
            </p>
            <p>
              From unbroken while a stern said fast at home he. This the bird
              stillness by some doubtless, lenore and purple bird once, louder
              rapping thereis this muttered theeby placid within plainly and,
              whispered whispered his ever with nevernevermore implore lenore
              by, chamber that more then.
            </p>
          </div>
          <div>
            <img src={doctors} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
