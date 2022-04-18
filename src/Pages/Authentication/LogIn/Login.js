import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Authentication.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  let errorElement = '';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    signInWithEmailAndPassword(email, password);
  };

  const handlePasswordReset = async () => {
    const email = emailRef?.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Reset password email sent');
    } else {
      toast('Please enter email!!');
    }
  };

  if (error || resetError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {resetError?.message}
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
    <Container>
      <h1 className="formDesignHeading">
        Please log into the account to get the services continuously
      </h1>
      <div className="formDesign">
        <Form onSubmit={handleLogIn}>
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
          <button className="formDesignButton" type="submit">
            Log in
          </button>
        </Form>
        <p className="toggleSection">
          New here?
          <span onClick={() => navigate('/register')}> Register now</span>
        </p>
        <p className="toggleSection">
          Forget Password?
          <span onClick={handlePasswordReset}> Reset Password</span>
        </p>
        {errorElement}
        <ToastContainer />
        <SocialLogIn />
      </div>
    </Container>
  );
};

export default Login;
