import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import siteLogo from '../../../Images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
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
        bg="info"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={siteLogo} alt="Doctor Gallery logo" />
            <span>Gallery</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <>
                  <Button onClick={logout}>Log out</Button>
                  <p className="text-white">{user?.email}</p>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
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
