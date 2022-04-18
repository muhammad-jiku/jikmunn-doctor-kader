import React from 'react';
import {
  useSendEmailVerification,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../../Images/google.png';
import githubLogo from '../../../Images/github.png';

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

  console.log(googleUser, githubUser);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  let errorElement = '';

  if (googleError || githubError || verifyError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}{' '}
          {verifyError?.message}
        </p>
      </div>
    );
  }

  if (googleLoading || githubLoading) {
    return <p>Loading...</p>;
  }
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }

  if (sending) {
    return <p>Sending...</p>;
  }

  const googleLogIn = async () => {
    await signInWithGoogle();
    await sendEmailVerification();
    alert('Email verification message sent');
  };

  const githubLogIn = async () => {
    await signInWithGithub();
    await sendEmailVerification();
    alert('Email verification message sent');
  };

  return (
    <>
      {errorElement}
      <div className="d-flex align-items-center justify-content-center">
        <hr className="text-primary w-50" />
        <p className="m-4">or</p>
        <hr className="text-primary w-50" />
      </div>
      <div className="d-flex">
        <Button variant="info" className="w-50 mx-auto" onClick={googleLogIn}>
          <span className="text-white">Log In with </span>
          <img src={googleLogo} alt="google's logo" />
        </Button>
        <Button variant="secondary" className="w-50 mx-2" onClick={githubLogIn}>
          <span>Log In with </span> <img src={githubLogo} alt="github's logo" />
        </Button>
      </div>
    </>
  );
};

export default SocialLogIn;
