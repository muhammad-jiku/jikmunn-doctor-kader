import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const termsRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const terms = termsRef?.current?.checked;
    if (terms) {
      console.log(name, email, password);
      await createUserWithEmailAndPassword(email, password);
    } else {
      alert('Please accept terms and conditions to create an account');
    }
    // await updateProfile({ nameRef: name });
    // alert('Updated profile');
  };

  if (error) {
    return (
      <div>
        <p>
          Error: {error?.message}
          {/* {updateError?.message} */}
        </p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }

  return (
    <>
      <Container>
        <Form className="my-4" onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              ref={nameRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Accept terms & conditions"
              ref={termsRef}
            />
          </Form.Group>
          <Button variant="primary" className="w-100" type="submit">
            Register
          </Button>
        </Form>
        <p>
          Already have an account?
          <span
            className="text-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >
            Log In now
          </span>
        </p>
        {/* <SocialLogIn /> */}
      </Container>
    </>
  );
};

export default Register;
