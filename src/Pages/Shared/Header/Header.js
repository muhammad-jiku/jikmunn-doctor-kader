import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import siteLogo from '../../../Images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div>
        <p>Loading User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="navBarDesign"
      >
        <Container>
          <div className="navBarDesignLogo" onClick={() => navigate('/')}>
            <img src={siteLogo} alt="Doctor Gallery logo" />
            <h1>Dr.Abdul Kader</h1>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navBarDesignLink">
              <Link to="/doctors">Doctors</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/about">About</Link>
              {user ? (
                <div className="navBarDesignPara">
                  <Button onClick={logout}>Log out</Button>
                  {/* <p className="text-dark">{user?.email}</p> */}
                </div>
              ) : (
                <>
                  <Link to="/login">Log In</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
