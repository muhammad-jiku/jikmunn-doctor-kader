import React from 'react';
import {
  useSendEmailVerification,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../../Images/google.png';
import githubLogo from '../../../Images/github.png';
import './SocialLogIn.css';

const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);

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
        <div className="lineDraw"></div>
        <p className="m-4">or</p>
        <div className="lineDraw"></div>
      </div>
      <div className="d-flex">
        <button className="googleButton" onClick={googleLogIn}>
          <span className="text-white">Log In with </span>
          <img src={googleLogo} alt="google's logo" />
        </button>
        <button className="githubButton" onClick={githubLogIn}>
          <span>Log In with </span> <img src={githubLogo} alt="github's logo" />
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
