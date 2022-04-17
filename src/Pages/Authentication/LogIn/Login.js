import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    return (
      <div>
        <p className="text-danger">
          Error: {error?.message}
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
        {/* <p>
          Forget Password?
          <span
            className="text-danger"
            style={{ cursor: 'pointer' }}
            onClick={async () => {
              const email = emailRef?.current?.value;
              if (email) {
                await sendPasswordResetEmail(email);
                toast('Sent email');
              } else {
                toast('Please Enter Email');
              }
            }}
          >
            Reset Password
          </span>
        </p> */}
        {/* {errorElement} */}
        {/* <SocialLogIn />
        <ToastContainer /> */}
      </Container>
    </>
  );
};

export default Login;
