import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  console.log(location, from);

  let errorElement = '';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handlePasswordReset = async () => {
    const email = emailRef?.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      // toast('Sent email');
      alert('Reset Email Sent ');
    } else {
      // toast('Please Enter Email');
      alert('Please Enter Email');
    }
  };

  if (error || resetError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {resetError?.message}
          {/* {emailError?.message} */}
        </p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (sending) {
    return <p>Sending...</p>;
  }

  return (
    <>
      <Container>
        <Form className="my-4" onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
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
          <Button variant="primary" className="w-100" type="submit">
            Log in
          </Button>
        </Form>
        <p>
          New here?
          <span
            className="text-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/register')}
          >
            Register now
          </span>
        </p>
        <p>
          Forget Password?
          <span
            className="text-danger"
            style={{ cursor: 'pointer' }}
            onClick={handlePasswordReset}
          >
            Reset Password
          </span>
        </p>
        {errorElement}
        <SocialLogIn />
        {/* <ToastContainer /> */}
      </Container>
    </>
  );
};

export default Login;
